import { Component, Input, OnInit } from '@angular/core';
import { Problem } from 'src/app/Problem';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

const DEFAULT_DURATION = 400;

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss'],
  animations: [
    trigger('expanded', [
      state('true', style({})),
      state('false', style({ height: '0px'})),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-in-out')),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in-out'))
    ])
  ]
})
export class CategoryContainerComponent implements OnInit {
  @Input() problems: Problem[]
  @Input() category: string
  expanded = false
  constructor() { }

  ngOnInit(): void {
  }
  toggle() {
    this.expanded = !this.expanded
  }

}