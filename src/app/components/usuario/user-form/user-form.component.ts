import { ApiService } from './../../../api/api.service';
import { Usuario } from '../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  usuario: Usuario = {
    NAME: '',
    EMAIL: '',
    PASSWORD: ''
  }
  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
  }

  novoUsuario(): void {
    if (this.usuario.NAME === "") {
      this.apiService.showMessage('Informe Nome')
    } else {
      if(this.usuario.EMAIL === ""){
        this.apiService.showMessage('Informe email')
      } else {
        if (this.usuario.PASSWORD === "") {
          this.apiService.showMessage('EU SOU UMA PIADA PARA VOCÊ?')
        } else {
          this.apiService.newUser(this.usuario).subscribe(() =>{
            this.apiService.showMessage('Usuário Cadastrado Com Sucesso!')
            this.router.navigate(['/users'])
              });
        }
      }
    }
    this.apiService.newUser(this.usuario).subscribe(() =>{
      this.apiService.showMessage('Usuário Cadastrado Com Sucesso!')
      this.router.navigate(['/users'])
    })
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
