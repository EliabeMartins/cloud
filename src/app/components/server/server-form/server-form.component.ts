import { MatSelectModule } from '@angular/material/select';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
// MODELOS
import { Servidor } from '../../models/servidor.model';
import { Tipo } from './../../models/tipo.model';
import { Cliente } from './../../models/cliente.model';
@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})

export class ServerFormComponent implements OnInit {

  server: Servidor = {
    NAME: '',
    CLIENTE: '',
    IP: '',
    SNMP: ''
  }

  clientes: Cliente[] = [];

  cliente: Cliente = {
    NAME: ''
  }

  tipos: Tipo [] = [];

  tipo: Tipo = {
    NAME: ''
  }

  constructor(
    private apiService: ApiService,  
    private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllCliente().subscribe( 
      cliente => this.clientes = cliente)
    
    this.apiService.getAllTipo().subscribe(
      tipo => this.tipos = tipo)
  }

  novoServidor(): void {
    if (this.server.NAME === "") {
      this.apiService.showMessage('Informe NOME do servidor');
    } else {
      if(this.server.IP === ""){
        this.apiService.showMessage('Informe IP do Servidor');
      } else {
        this.apiService.newServer(this.server).subscribe(() =>{
          this.server.CLIENTE = `${this.cliente}`;
          this.server.TIPO = `${this.tipos}`;
          this.apiService.showMessage('Servidor Cadastrado Com Sucesso!')
          this.router.navigate(['/servers'])
        })
      }
    }
  }
  cancel(): void {
    this.router.navigate(['/servers'])
  }

  novoCliente(): void {
    this.router.navigate(['new/cliente'])
  }

  clienteChange(ID: any): void {
    this.server.CLIENTE = `${ID}`;
  }

  tipoChange(ID: any): void {
    this.server.TIPO = `${ID}`;
  }
}
