import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from './../cliente.service'; 
import { Cliente } from './../cliente.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  cliente: Cliente = {
    name: '',
    email: '',
    tel: ''
  }
  constructor(
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() =>{
      this.clienteService.showMessage('Cliente Cadastrado Com Sucesso!')
      this.router.navigate(['/clientes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }

}
