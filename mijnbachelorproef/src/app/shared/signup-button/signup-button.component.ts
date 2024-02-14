import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup-button.component.html',
  styleUrls: ['./signup-button.component.css']
})
export class SignupButtonComponent {
  constructor(private auth: AuthService) {}

  handleSignUp(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/',
      },
      authorizationParams: {
        prompt: 'login',
        screen_hint: "signup", //other possibilities: https://auth0.github.io/auth0-spa-js/interfaces/AuthorizationParams.html#prompt,
      },
    });
  }

}
