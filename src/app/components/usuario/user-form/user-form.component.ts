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
    name: '',
    email: '',
    password: ''
  }
  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
  }

  novoUsuario(): void {
    this.apiService.showMessage('Usuário Cadastrado Com Sucesso!')
    this.apiService.newUser(this.usuario).subscribe(() =>{
      // this.apiService.showMessage('Usuário Cadastrado Com Sucesso!')
      this.router.navigate(['/users'])
    })
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
