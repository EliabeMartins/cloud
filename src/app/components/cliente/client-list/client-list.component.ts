import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../api/api.service';
import { Cliente } from './../cliente.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  cliente!: Cliente[];
  displayedColumns = ['id', 'name', 'email', 'tel', 'action'];
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCliente().subscribe( 
      cliente => this.cliente = cliente)
  }

}
