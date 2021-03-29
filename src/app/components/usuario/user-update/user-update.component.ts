import { Usuario } from './../../models/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  
  usuario!: Usuario 

  // usuario: Usuario = {
  //   NAME: '',
  //   EMAIL: '',
  //   PASSWORD: ''
  // }

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let ID = this.route.snapshot.paramMap.get('id')
    this.apiService.userById(`${ID}`).subscribe(usuario => {
      this.usuario = usuario;
    });
  }
  
  AtualizarUsuario(): void {
    this.apiService.newUser(this.usuario).subscribe(() =>{
      this.apiService.showMessage('Usuário Atualizado Com Sucesso!')
      this.router.navigate(['/users'])
    })
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}
