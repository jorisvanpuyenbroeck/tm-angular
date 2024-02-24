import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from "@angular/material/toolbar";
import { LoginButtonComponent } from './login-button/login-button.component';
import { SignupButtonComponent } from './signup-button/signup-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    MatCardModule,
    MatOptionModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ],
})
export class SharedModule {}
