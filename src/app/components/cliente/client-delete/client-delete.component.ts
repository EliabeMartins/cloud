import { Cliente } from './../../models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {
  
  cliente!: Cliente
  // cliente: Cliente = {
  //   ID '',
  //   NAME: '',
  //   EMAIL: '',
  //   TEL: ''
  // }

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    let ID = this.route.snapshot.paramMap.get('id');
    this.apiService.clientById(`${ID}`).subscribe(cliente => {
      this.cliente = cliente;
    });
  }

  DeletarCliente(): void {
    console.log(this.cliente);
    this.apiService.delClient(`${this.cliente.ID}`).subscribe(() =>{
      this.apiService.showMessage('Cliente Deletado Com Sucesso!')
      this.router.navigate(['/clientes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }
}
