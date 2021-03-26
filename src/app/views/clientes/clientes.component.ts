import { ApiService } from './../../api/api.service';
import { Cliente } from './../../components/models/cliente.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  cliente!: Cliente[];
  displayedColumns = ['id', 'name', 'email', 'tel', 'action'];

  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllCliente().subscribe( 
      cliente => this.cliente = cliente)
  }

  navigateToCreateCliente(): void {
    this.router.navigate(['new/cliente'])
  }
}
