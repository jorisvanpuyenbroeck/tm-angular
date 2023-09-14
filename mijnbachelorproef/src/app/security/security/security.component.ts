import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css'],
})
export class SecurityComponent implements OnInit {
  user: User = {
    userId: 0,
    email: '',
    password: '',
    userLevel: '',
    userName: '',
    firstName: '',
    lastName: '',
    programType: '',
    expertise: '',
    token: '',
    studentProjects: null,
    coachProjects: null,
    userTopics: null,
  };

  isSubmitted: boolean = false;
  errorMessage: string = '';

  isLogin: boolean = false;
  isRegister: boolean = false;
  isLogout: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    switch (this.router.url) {
      case '/login': {
        this.isLogin = true;
        break;
      }
      case '/logout': {
        this.isLogout = true;
        this.authService.deleteToken();
        this.authService.deleteUser();
        this.router.navigate(['']);
        break;
      }
      case '/register': {
        this.isRegister = true;
        break;
      }
      default: {
        this.isLogin = true;
        break;
      }
    }
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.isLogin) {
      this.authService.authenticate(this.user).subscribe(
        (result) => {
          this.errorMessage = '';
          // save access token localstorage
          localStorage.setItem('token', result.token);
          localStorage.setItem('user', JSON.stringify(result));
          this.router.navigate(['']);
        },
        (error) => {
          this.errorMessage = 'Email/password not correct!';
          this.isSubmitted = false;
        },
      );
    } else {
      alert('work in progress');
    }
  }
}
