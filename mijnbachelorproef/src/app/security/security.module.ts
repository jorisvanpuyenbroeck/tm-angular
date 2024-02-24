import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from "./user.service";
import {RoleService} from "./role.service";
import {AuthService} from "@auth0/auth0-angular";
import {LoginButtonComponent} from "./login-button/login-button.component";
import {SignupButtonComponent} from "./signup-button/signup-button.component";
import {LogoutButtonComponent} from "./logout-button/logout-button.component";

@NgModule({
  declarations: [
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
      LoginButtonComponent,
      SignupButtonComponent,
      LogoutButtonComponent,
  ],
  providers: [
    UserService, RoleService, AuthService
  ]
})
export class SecurityModule { }
