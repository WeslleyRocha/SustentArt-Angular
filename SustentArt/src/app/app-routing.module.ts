import { HomeComponent } from './home/HomeComponent';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FeedComponent } from './feed/feed.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutTemaComponent } from './put-tema/put-tema.component';




const routes: Routes = [
  
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent},
  { path:'sobre-nos', component: SobreNosComponent },
  { path: 'delete-post', component: DeletePostagemComponent},
  { path: 'delete-tema', component: DeleteTemaComponent},  
  { path: 'edita-post/:id', component: PutPostagemComponent },
  { path: 'editar-tema/:id', component: PutTemaComponent},
  { path: 'post-tema', component: PostTemaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
