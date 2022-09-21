import { Component, Input, OnInit } from '@angular/core';
import { Problem } from 'src/app/Problem';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { ProblemService } from 'src/app/services/problem.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss']
})
export class ProblemListComponent implements OnInit {
  @Input() problems: Problem[]
  @Input() category: string
  completedProblemsInCategory: Set<string>
  dataSource: MatTableDataSource<Problem>
  selection = new SelectionModel<Problem>(true, []);
  displayedColumns: string[] = ['Status', 'Problem', 'Difficulty'];
  constructor(private problemService: ProblemService, private authService: AuthService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Problem>(this.problems);
    this.authService.user$.subscribe((user) => {
      this.problemService.getCompletedProblems().subscribe(data => {
          data.subscribe((actualData:any) => {
            const completedProblems = user ? actualData.data():actualData
            this.completedProblemsInCategory= new Set(completedProblems[this.category] || [])
            const selected = this.problems.filter(problem => this.completedProblemsInCategory.has(problem.link))
            this.selection.setSelection(...selected)
          })

      })
    })


  }
  onNgModelChange(row:Problem) {
    this.selection.toggle(row)
    const add:boolean = this.selection.isSelected(row)
    if (add) {
      this.problemService.addCompletedProblem(this.category, row.link)
    } else {
      this.problemService.removeCompletedProblem(this.category, row.link)
    }
  }

  checkboxLabel(row: Problem): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} ${row.title}`;
  }
}
