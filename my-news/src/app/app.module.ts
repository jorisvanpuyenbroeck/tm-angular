import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ShortenContentPipe } from './shorten-content.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    ArticleDetailComponent,
    ShortenContentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
