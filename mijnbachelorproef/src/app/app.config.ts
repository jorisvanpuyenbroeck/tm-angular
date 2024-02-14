//app.config.ts (or main.ts)

import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { routes } from './app-routing.module';
import { provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

const domain = environment.AUTH0_DOMAIN;
const clientId = environment.AUTH0_CLIENT_ID;

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    provideAuth0({
      domain: domain,
      clientId: clientId,
      authorizationParams: {
        redirect_uri: environment.redirectUri
      }
    }),
  ],
};
