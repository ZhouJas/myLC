import { Component, OnInit, Input } from '@angular/core';
import { Problem } from 'src/app/Problem';

@Component({
  selector: 'app-problem-list-item',
  templateUrl: './problem-list-item.component.html',
  styleUrls: ['./problem-list-item.component.scss']
})
export class ProblemListItemComponent implements OnInit {
  @Input() problem: Problem;
  @Input() category: string;
  selected:boolean = false
  constructor() { }

  ngOnInit(): void {
    const completedProblems = JSON.parse(localStorage.getItem('completed-problems') || '{}')
    const completedProblemsInCategory:Set<string> = completedProblems[this.category] || new Set()
    if (completedProblemsInCategory.has(this.problem.link)) {
      this.selected = true
    }
  }

}
