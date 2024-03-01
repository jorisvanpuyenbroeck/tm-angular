import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './header/menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';
import { AuthModule } from '@auth0/auth0-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from "./admin/admin.module";
import { ApplicationFlowComponent } from './header/application-flow/application-flow.component';
import { ApplicationStageComponent } from './header/application-stage/application-stage.component';
import {SecurityModule} from "./security/security.module";
import {FooterModule} from "./footer/footer.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, ApplicationFlowComponent, ApplicationStageComponent],
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
          `${environment.api_url}/*`
        ]
      }
    }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    UserModule,
    AdminModule,
    SecurityModule,
    FooterModule
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
