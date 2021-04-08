// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../../models/cliente.model';
import { ApiService } from './../../../api/api.service';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  // cliente!: Cliente;
  

  cliente: Cliente = {
    ID:'',
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
    if (this.cliente.NAME === "") {
      this.apiService.showMessage('Informe Nome')
    } else {
      if(this.cliente.EMAIL === ""){
        this.apiService.showMessage('Informe email')
      } else {
        this.apiService.newCliente(this.cliente).subscribe(() =>{
          this.apiService.showMessage('Cliente Cadastrado Com Sucesso!')
          this.router.navigate(['/clientes'])
            });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }

}
