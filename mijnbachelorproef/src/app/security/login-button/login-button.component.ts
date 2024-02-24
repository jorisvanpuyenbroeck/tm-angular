import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  constructor(private auth: AuthService, private userService: UserService) {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      if (isAuthenticated) {
        this.userService.updateUserState();
      }
    });
  }

  handleLogin(): void {
    this.auth.loginWithRedirect({
      appState: {
        target: '/',
      },
      authorizationParams: {
        prompt: 'login',
      },
    });
  }

  // ngOnInit() {
  //   this.auth.handleRedirectCallback().subscribe(result => {
  //     if (result && result.appState && result.appState.target) {
  //       this.auth.user$.subscribe(user => {
  //         if (user && user.sub) {
  //           this.userService.userExists(user.sub).subscribe(exists => {
  //             if (!exists) {
  //               this.userService.createUser(user).subscribe();
  //             }
  //           });
  //         }
  //       });
  //     }
  //   });
  // }

}
