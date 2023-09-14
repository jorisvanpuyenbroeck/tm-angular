import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SecurityModule } from './security/security.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    UserModule,
    AdminModule,
    NgIf,
    RouterLink,
    SecurityModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
