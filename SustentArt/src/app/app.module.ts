import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {OrderModule} from 'ngx-order-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/HomeComponent";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FeedComponent } from './feed/feed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { PerfilLateralComponent } from './perfil-lateral/perfil-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreNosComponent,
    FeedComponent,
    NavbarComponent,
    FooterComponent,
    PutPostagemComponent,
    DeletePostagemComponent,
    DeleteTemaComponent,
    PostTemaComponent,
    PutTemaComponent,
    PerfilLateralComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    OrderModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
