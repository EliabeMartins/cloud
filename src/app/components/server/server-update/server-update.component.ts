import { Tipo } from './../../models/tipo.model';
import { Cliente } from './../../models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Servidor } from './../../models/servidor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-update',
  templateUrl: './server-update.component.html',
  styleUrls: ['./server-update.component.css']
})
export class ServerUpdateComponent implements OnInit {

  tipos: Tipo [] = [
    {value: 'Aplicação', viewValue: 'Aplicação'},
    {value: 'Backup', viewValue: 'Backup'},
    {value: 'Balancer', viewValue: 'Balancer'},
    {value: 'Database', viewValue: 'Database'},
    {value: 'Dev', viewValue: 'Dev'},
    {value: 'Router', viewValue: 'Router'},
    {value: 'Storage', viewValue: 'Storage'},
    {value: 'Outros', viewValue: 'Outros'}
  ];

  // server!: Servidor
  server: Servidor = {
    NAME: '',
    IP: '',
    TIPO: '',
    CLIENTE: '',
    SNMP: '',

  }

  clientes: Cliente[] = [];

  constructor(
    private apiService: ApiService,  
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let ID = this.route.snapshot.paramMap.get('id')
    this.apiService.serverById(`${ID}`).subscribe(server => {
      this.server = server;
    });

    this.apiService.getAllCliente().subscribe( 
      cliente => this.clientes = cliente)
  }

  AtualizarServidor(): void {
    this.apiService.updateServer(this.server).subscribe(() =>{
      this.server.CLIENTE = `${this.clientes}`;
      this.server.TIPO = `${this.tipos}`;
      this.apiService.showMessage('Servidor Atualizado!')
      this.router.navigate(['/servers'])
    })
  }

  cancel(): void {
    this.router.navigate(['/servers'])
  }

  clienteChange(ID: any): void {
    this.server.CLIENTE = `${ID}`;
  }

  tipoChange(Tipo: any): void {
    this.server.TIPO = `${Tipo}`;
  }
}
