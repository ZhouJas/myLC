import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Problem, RecType } from 'src/app/Problem';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ProblemService } from 'src/app/services/problem.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit {
  @Input() problems: Problem[]
  @Input() category: string
  @Input() recSelection: Observable<RecType>
  @Output() problemSelectionEvent = new EventEmitter<Problem>()
  subscription: Subscription
  completedProblemsInCategory: Set<string>
  dataSource: MatTableDataSource<Problem>
  selection = new SelectionModel<Problem>(true, []);
  displayedColumns: string[] = ['Status', 'Problem', 'Difficulty'];
  titleToCheckedState: Map<string, boolean> = new Map()
  constructor(private problemService: ProblemService, private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription = this.recSelection.subscribe((data) => {
      if (data.category == this.category) {
        this.onNgModelChange(data.problem, false)
      }
    })
    this.dataSource = new MatTableDataSource<Problem>(this.problems);
    this.authService.user$.subscribe((user) => {
      this.problemService.getCompletedProblems().subscribe(data => {
        data.subscribe((actualData: any) => {
          const completedProblems = user ? actualData.data() : actualData
          this.completedProblemsInCategory = new Set(completedProblems[this.category] || [])
          const selected = this.problems.filter(problem => {
            this.titleToCheckedState.set(problem.link, this.completedProblemsInCategory.has(problem.link))
            return this.titleToCheckedState.get(problem.link)
          })
          this.selection.setSelection(...selected)
        })
      })
    })
  }

  onNgModelChange(row: Problem, emit: boolean) {
    const problem = this.problems.filter(problem => problem.link === row.link)[0]
    this.selection.toggle(problem)
    const add: boolean = this.selection.isSelected(problem)
    this.titleToCheckedState.set(row.link, add)
    if (add) {
      this.problemService.addCompletedProblem(this.category, row.link)
    } else {
      this.problemService.removeCompletedProblem(this.category, row.link)
    }
    if (emit) {
      this.problemSelectionEvent.emit(row)
    }
  }

  checkboxLabel(row: Problem): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} ${row.title}`;
  }
}
