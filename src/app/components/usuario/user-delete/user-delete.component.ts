import { Usuario } from './../../models/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  usuario: Usuario = {
    NAME: '',
    EMAIL: '',
    PASSWORD: ''
  }

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let ID = this.route.snapshot.paramMap.get('id')
    this.apiService.userById(`${ID}`).subscribe(usuario => {
      this.usuario = usuario;
    });
  }

  DeletarUsuario(): void {
    this.apiService.delUser(`${this.usuario.ID}`).subscribe(() =>{
      this.apiService.showMessage('Usuário Deletado Com Sucesso!')
      console.log(this.usuario);
      this.router.navigate(['/users']);
    });
  }

  cancel(): void {
    this.router.navigate(['/users']);
  }
}
