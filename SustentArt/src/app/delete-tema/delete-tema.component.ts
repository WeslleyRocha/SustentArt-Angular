import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-delete-tema',
  templateUrl: './delete-tema.component.html',
  styleUrls: ['./delete-tema.component.css']
})
export class DeleteTemaComponent implements OnInit {

  tema: Tema = new Tema

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    let id: number = this.route.snapshot.params["id"]
    this.findById(id)
  }

  findById(id:number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema) =>{
      this.tema = resp
    }, err => {
      console.log(`Erro cod: $(err.status)`)
    });
  }

  btnSim(){
    this.temaService.deleteTema(this.tema.id).subscribe(() =>{
      this.router.navigate(['/cadastro-tema']) //confirmar se foi criado o componente cadastro-tema
      alert('Tema apagado com sucesso'!) 
    })
  }

  btnNao(){
    this.router.navigate(['/cadastro-tema']) //confirmar se foi criado o componente cadastro-tema (ou post-tema)
  }

}
