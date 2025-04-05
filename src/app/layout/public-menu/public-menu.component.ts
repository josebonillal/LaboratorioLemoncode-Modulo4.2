import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-public-menu',
  imports: [CommonModule],
  templateUrl: './public-menu.component.html',
  styleUrl: './public-menu.component.scss'
})
export class PublicMenuComponent {

  constructor(public auth: AuthService, private router: Router) {}

}
