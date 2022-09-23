import { Component, OnInit } from '@angular/core';
import { problems, categoryOrdering } from './problems';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public auth: AuthService) {}
  problems = problems
  categoryOrdering = categoryOrdering
  ngOnInit() {

  }
}
