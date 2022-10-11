import { Component, HostBinding, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Problem, RecType } from './Problem';
import { problems, categoryOrdering } from './problems';
import { AuthService } from './services/auth.service';
import { Theme } from './Theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public auth: AuthService) {}
  problems = problems
  categoryOrdering = categoryOrdering
  isDark = localStorage.getItem('selected-theme') ? localStorage.getItem('selected-theme') === Theme.Dark: true
  recEvent: Subject<RecType> = new Subject<RecType>()
  probEvent: Subject<Problem> = new Subject<Problem>()
  @HostBinding('class')
  get themeMode() {
    return this.isDark ? '': 'theme-alternate'
  }
  ngOnInit() {
  }
  modeSwitch() {
    this.isDark = !this.isDark
    localStorage.setItem('selected-theme', this.isDark ? Theme.Dark: Theme.Light)
  }
  emitRecSelection(event: RecType) {
    this.recEvent.next(event)
  }
  emitProblemSelection(event: Problem) {
    this.probEvent.next(event)
  }
  

}
