import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Problem, RecType } from 'src/app/Problem';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Subscription, Observable } from 'rxjs';

const DEFAULT_DURATION = 400;

@Component({
  selector: 'app-category-container',
  templateUrl: './category-container.component.html',
  styleUrls: ['./category-container.component.scss'],
  animations: [
    trigger('expanded', [
      state('true', style({})),
      state('false', style({ height: '0px' })),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-in-out')),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in-out'))
    ])
  ]
})
export class CategoryContainerComponent implements OnInit {
  @Input() problems: Problem[] = []
  @Input() category: string
  @Input() recSelection: Observable<RecType>
  @Input() probSelection: Observable<Problem>
  @Output() recSelectionEvent = new EventEmitter<RecType>()
  @Output() problemSelectionEvent = new EventEmitter<Problem>()
  subscription: Subscription
  isRec: boolean
  expanded = false
  constructor() { }

  ngOnInit(): void {
    this.isRec = this.category == "Recommended"
  }

  toggle() {
    this.expanded = !this.expanded
  }
  recSelectionEmit(event: RecType) {
    this.recSelectionEvent.emit(event)
  }
  problemSelectionEmit(event: Problem) {
    this.problemSelectionEvent.emit(event)
  }


}
