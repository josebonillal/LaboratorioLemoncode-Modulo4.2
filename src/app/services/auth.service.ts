import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private username = 'Usuario';

  constructor() {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.loggedIn = true;
        this.username = storedUser;
      }
    }
  }

  login({ username, password }: { username: string; password: string }): boolean {
    if (username === 'master@lemoncode.net' && password === '12345678') {
      this.loggedIn = true;
      this.username = username;
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', username);
      }
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    this.username = '';
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
    console.log('Sesión cerrada');
  }

  isLogged(): boolean {
    return this.loggedIn;
  }

  getUsername(): string {
    return this.username;
  }
}
