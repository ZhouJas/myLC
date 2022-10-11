import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { problems, categoryOrdering } from '../problems';

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
  generateRecommendations() {
    const curTime = new Date()
    const curDate = new Date(Date.UTC(curTime.getUTCFullYear(), curTime.getUTCMonth(), curTime.getUTCDate()));
    if (localStorage.getItem('questionsOfTheDay')) {
      let questionsOfTheDay = JSON.parse(localStorage.getItem('questionsOfTheDay') || '{}')
      const creationTime = new Date(questionsOfTheDay['creationTime'])
      const creationDate = new Date(Date.UTC(creationTime.getUTCFullYear(), creationTime.getUTCMonth(), creationTime.getUTCDate()));
      if (curDate.valueOf() === creationDate.valueOf()) {
        return questionsOfTheDay.problems
      }
    }
    let res = new Set()
    while (res.size != 4) {
      const randomCategory = categoryOrdering[Math.floor(Math.random() * categoryOrdering.length)]
      const randomProblemList = problems.get(randomCategory) || []
      const randomProblem = randomProblemList[Math.floor(Math.random() * randomProblemList?.length)]
      res.add({ problem: randomProblem, category: randomCategory })
    }
    let questionsOfTheDay = JSON.stringify({ creationTime: curDate, problems: Array.from(res) })
    localStorage.setItem('questionsOfTheDay', questionsOfTheDay)
    return Array.from(res)
  }


}
