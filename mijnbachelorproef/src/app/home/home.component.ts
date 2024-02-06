import { Component } from '@angular/core';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private authService: AuthService) {}

  user = this.authService.getUser();

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
