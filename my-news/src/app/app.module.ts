import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { ArticleModule } from './article/article.module';
import { AdminModule } from './admin/admin.module';
import { SecurityModule } from './security/security.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ArticleModule,
    AdminModule,
    SecurityModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
