import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servidor } from './../servidor.model';
// import { ServidorService } from './../servidor.service';


//
@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})

export class ServerFormComponent implements OnInit {

  server: Servidor = {
    name: '',
    ip: '',
    snmp: '',
    cliente: ''
  }
  constructor(
    private apiService: ApiService,  
    private router: Router) { }

  ngOnInit(): void {
  }

  novoServidor(): void {
    this.apiService.newServer(this.server).subscribe(() =>{
      this.apiService.showMessage('Servidor Cadastrado!')
      this.router.navigate(['/servers'])
    })
  }

  cancel(): void {
    this.router.navigate(['/servers'])
  }
}
