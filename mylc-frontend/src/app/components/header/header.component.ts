import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isDark: boolean
 @Output() modeSwitch = new EventEmitter<void>();

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
  }
  toggleDarkMode() {
    this.modeSwitch.emit()
  }

}
