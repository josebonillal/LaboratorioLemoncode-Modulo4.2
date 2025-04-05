import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-private-header',
  imports: [CommonModule],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss'
})
export class PrivateHeaderComponent {
  constructor(public auth: AuthService, private router: Router) {}

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
