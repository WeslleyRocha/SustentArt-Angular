import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/HomeComponent";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FeedComponent } from './feed/feed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreNosComponent,
    FeedComponent,
    NavbarComponent,
    FooterComponent,
    DeletePostagemComponent,
    DeleteTemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
