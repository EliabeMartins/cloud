import { Cliente } from './../../components/models/cliente.model';
import { Servidor } from './../../components/models/servidor.model';
import { ApiService } from './../../api/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  servidors!: Servidor[];
  clients: Cliente[] = [];
  // clients: Cliente = {
  //   NAME:''
  // }
  
  displayedColumns = ['id', 'name', 'ip', 'cliente', 'action' ];

  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllServer().subscribe( 
      server => this.servidors = server)
  }

  navigateToCreateServer(): void {
    this.router.navigate(['new/server'])
  }

  navigateToCreateCliente(): void {
    this.router.navigate(['new/cliente'])
  }

}
