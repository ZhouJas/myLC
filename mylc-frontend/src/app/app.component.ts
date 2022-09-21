import { Component } from '@angular/core';
import { problems, categoryOrdering } from './problems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
  problems = problems
  categoryOrdering = categoryOrdering
}
