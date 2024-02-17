import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { CommonModule } from '@angular/common';
import { AuthModule } from '@auth0/auth0-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {LoginButtonComponent} from "./shared/login-button/login-button.component";
import {SignupButtonComponent} from "./shared/signup-button/signup-button.component";
import {LogoutButtonComponent} from "./shared/logout-button/logout-button.component";
import {ProposalService} from "./user/proposal/proposal.service";
import {TopicService} from "./user/topic/topic.service";

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent],
  imports: [
    AuthModule.forRoot({
      domain: 'dev-toowwl21qlfjeu6w.eu.auth0.com',
      clientId: 'U9OMeyZVRGhl9L0uS7A7jwvuDCYW0ca9',
      authorizationParams: {
        audience: environment.AUTH0_AUDIENCE,
        redirect_uri: window.location.origin
      },
      httpInterceptor: {
        allowedList: [
          `${environment.api_url}/proposals`, // allow requests to our API,
          `${environment.api_url}/topics` // allow requests to our API,
        ]
      }
    }),
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    UserModule,
    CommonModule,
    MatToolbarModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    },
],
  bootstrap: [AppComponent],
})
export class AppModule {}
