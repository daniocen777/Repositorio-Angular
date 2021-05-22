import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {}

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

  signout(): void {
    this._authService.logout();
  }
}
