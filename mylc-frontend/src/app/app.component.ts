import { Component, HostBinding, OnInit } from '@angular/core';
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
}
