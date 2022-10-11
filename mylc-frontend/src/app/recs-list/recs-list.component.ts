import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Problem, RecType } from 'src/app/Problem';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ProblemService } from 'src/app/services/problem.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-recs-list',
  templateUrl: './recs-list.component.html',
  styleUrls: ['./recs-list.component.scss']
})
export class RecsListComponent implements OnInit {
  @Input() probSelectionEvent = new Observable<Problem>()
  @Output() recSelectionEvent = new EventEmitter<RecType>()
  subscription: Subscription
  problems: RecType[]
  dataSource: MatTableDataSource<RecType>
  selection = new SelectionModel<RecType>(true, []);
  displayedColumns: string[] = ['Status', 'Problem', 'Difficulty'];
  titleToCheckedState: Map<string, boolean> = new Map()
  constructor(private problemService: ProblemService, private authService: AuthService) { }

  ngOnInit(): void {
    this.problems = this.problemService.generateRecommendations()
    this.dataSource = new MatTableDataSource<RecType>(this.problems);
    this.subscription = this.probSelectionEvent.subscribe((problem) => {
      if (this.problems.filter(rec => rec.problem.link == problem.link)) {
        const emittedProblem = this.problems.filter(rec => rec.problem.link == problem.link)[0]
        this.onNgModelChange(emittedProblem, false)
      }
    })
    this.authService.user$.subscribe((user) => {
      this.problemService.getCompletedProblems().subscribe(data => {
        data.subscribe((actualData: any) => {
          const completedProblems = user ? actualData.data() : actualData
          for (let i = 0; i < this.problems.length; ++i) {
            let completedProblemsInCategory = new Set(completedProblems[this.problems[i].category] || [])
            if (completedProblemsInCategory.has(this.problems[i].problem.link)) {
              this.selection.select(this.problems[i])
              this.titleToCheckedState.set(this.problems[i].problem.link, true)
            }
          }
        })
      })
    })
  }
  onNgModelChange(row: RecType, emit: boolean) {
    const problem = this.problems.filter(rec => rec.problem.link === row.problem.link)[0]
    this.selection.toggle(problem)
    this.titleToCheckedState.set(row.problem.link, this.selection.isSelected(row))
    if (emit) {
      this.recSelectionEvent.emit(row)
    }
  }

  checkboxLabel(row: RecType): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} ${row.problem.title}`;
  }

}
