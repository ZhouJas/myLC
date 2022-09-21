import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {
  user: any
  completedProblems: Observable<any>

  constructor(private auth: AuthService) { 
    this.auth.user$.subscribe(data => {
      this.user = data; 
      if (!this.user) {
        this.completedProblems = of(of(JSON.parse(localStorage.getItem('completed-problems') || '{}')))
      }
      this.completedProblems = this.auth.getCompletedProblems(this.user)
    })
  }
  getCompletedProblems() {
    return this.completedProblems
  }

  addCompletedProblem(category: string, problem: string): void {
    if (!this.user) {
      const completedProblems = JSON.parse(localStorage.getItem('completed-problems') || '{}')
      let completedProblemsInCategory: Set<string> = new Set(completedProblems[category])
      completedProblemsInCategory.add(problem)
      completedProblems[category] = Array.from(completedProblemsInCategory)
      localStorage.setItem('completed-problems', JSON.stringify(completedProblems))
    } else {
      this.auth.modifyCompletedProblem(this.user, category, problem)
    }
  }
  removeCompletedProblem(category: string, problem: string) {
    if (!this.user) {
      const completedProblems = JSON.parse(localStorage.getItem('completed-problems') || '{}')
      let completedProblemsInCategory: Set<string> = new Set(completedProblems[category])
      completedProblemsInCategory.delete(problem)
      completedProblems[category] = Array.from(completedProblemsInCategory)
      localStorage.setItem('completed-problems', JSON.stringify(completedProblems))
    } else {
      this.auth.modifyCompletedProblem(this.user, category, problem, false)
    }
  }

}
