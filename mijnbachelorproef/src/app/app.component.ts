import {Component, signal} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {RoleService} from "./security/role.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated = signal(false);
  isStudent = signal(false);
  title = 'mijnbachelorproef';

  constructor(
      public authService: AuthService,
      public roleService: RoleService,
      private router: Router,
  ) {
    this.authService.isAuthenticated$.subscribe((auth) => {
      this.isAuthenticated.set(auth);
    });
    this.roleService.hasPermission('isStudent').subscribe((student) => {
      this.isStudent.set(student);
    });

  }



}
