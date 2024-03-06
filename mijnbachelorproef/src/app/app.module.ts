import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from '@auth0/auth0-angular';
import { UserModule} from "./user/user.module";
import { LayoutModule} from "./layout/layout.module";

@NgModule({
  declarations: [AppComponent],
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
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    UserModule,
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
