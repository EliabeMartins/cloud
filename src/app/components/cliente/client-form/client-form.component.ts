import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from './../cliente.model';
import { ApiService } from './../../../api/api.service';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  cliente: Cliente = {
    NAME: '',
    EMAIL: '',
    TEL: ''
  }
  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
  }

  novoCliente(): void {
    // this.apiService.showMessage('Cliente Cadastrado Com Sucesso!')
    this.apiService.newCliente(this.cliente).subscribe(() =>{
      this.apiService.showMessage('Cliente Cadastrado Com Sucesso!')
      this.router.navigate(['/clientes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }

}
