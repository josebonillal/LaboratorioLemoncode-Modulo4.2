import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-private-menu',
  imports: [CommonModule],
  templateUrl: './private-menu.component.html',
  styleUrl: './private-menu.component.scss'
})
export class PrivateMenuComponent {
  constructor(public auth: AuthService, private router: Router) {}

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
