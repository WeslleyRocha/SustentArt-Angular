import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';


@Component({
  selector: 'app-put-postagem',
  templateUrl: './put-postagem.component.html',
  styleUrls: ['./put-postagem.component.css']
})
export class PutPostagemComponent implements OnInit {

  postagem: Postagem = new Postagem()
  idPost: number

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number



  constructor(private temaService: TemaService, private postagemService: PostagemService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    window.scroll(0,0)

    this.idPost = this.route.snapshot.params["id"]
     this.findByIdPostagem(this.idPost)

    this.findAllTema() //parte do henrique

  }


  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) =>{
      this.postagem = resp
    })
  }

  
salvar(){
  this.tema.id = this.idTema
  this.postagem.tema = this.tema

  this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) =>{
    this.postagem = resp
    this.router.navigate(['/feed'])
    alert('Postagem alterada com sucesso!')
  }, error =>{
    if(error.status == '500'){
     alert('Preencha todos os campos antes de enviar!!')
    }

  })

}

//Parte do Henrique
 findAllTema(){
  this.temaService.getAllTemas().subscribe((resp: Tema[]) =>{
    this.listaTemas = resp
  })

 }
 findByIdTema(){
 this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
    this.tema = resp
  })

 }


}
