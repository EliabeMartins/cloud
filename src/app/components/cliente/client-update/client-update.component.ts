import { Cliente } from './../../models/cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

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
    let ID = this.route.snapshot.paramMap.get('id')
    this.apiService.clientById(`${ID}`).subscribe(cliente => {
      this.cliente = cliente;
    });
  }


  AtualizarCliente(): void {
    console.log(this.cliente);
    this.apiService.updateClient(this.cliente).subscribe(() => {
      this.apiService.showMessage('Cliente Atualizado Com Sucesso!')
      this.router.navigate(['/clientes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }

}
