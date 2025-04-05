import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { PrivateMenuComponent } from './layout/private-menu/private-menu.component';
import { PublicMenuComponent } from './layout/public-menu/public-menu.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, PublicHeaderComponent, FooterComponent, PrivateHeaderComponent, PrivateMenuComponent, PublicMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';

  constructor(public auth: AuthService) {}

  // Método para hacer logout
  logout() {
    this.auth.logout();
  }
}