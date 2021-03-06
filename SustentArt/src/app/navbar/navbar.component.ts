import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email: string
  senha: string
  userLogin: UserLogin = new UserLogin

  constructor(
    public authService: AuthService,
    private router: Router
    ) { } 

  ngOnInit(): void{
  }

  entrar(){
    return this.authService.logar(this.userLogin).subscribe((resp: UserLogin) => {
    this.userLogin = resp
    localStorage.setItem('token', this.userLogin.token)
    localStorage.setItem('email', this.userLogin.email)
    this.router.navigate(['/feed']) })
  }
  
  sair(){
    this.router.navigate(['/home'])
    localStorage.clear()
    alert("Obrigado pela visita, até a próxima.. ;D")
  }

  
}