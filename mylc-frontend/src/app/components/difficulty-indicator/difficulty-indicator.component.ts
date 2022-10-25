import { Component, Input, OnInit } from '@angular/core';
import { Hardness } from '../../Hardness';
@Component({
  selector: 'app-difficulty-indicator',
  templateUrl: './difficulty-indicator.component.html',
  styleUrls: ['./difficulty-indicator.component.scss']
})
export class DifficultyIndicatorComponent implements OnInit {

  @Input() difficulty: Hardness
  color: string
  constructor() { }

  ngOnInit(): void {
    switch (this.difficulty) {
      case Hardness.Easy:
        this.color = "primary"
        break;
      case Hardness.Medium:
        this.color = "accent"
        break;
      case Hardness.Hard:
        this.color = "warn"
        break;
    }
  }

}
