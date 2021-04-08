import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servidor } from '../../models/servidor.model';



//
@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})

export class ServerFormComponent implements OnInit {

  // server!: Servidor 

  server: Servidor = {
    NAME: '',
    IP: '',
    SNMP: ''
  }

  constructor(
    private apiService: ApiService,  
    private router: Router) { }

  ngOnInit(): void {
  }

  novoServidor(): void {
    if (this.server.NAME === "") {
      this.apiService.showMessage('Informe Nome do servidor')
    } else {
      if(this.server.IP === ""){
        this.apiService.showMessage('Informe IP do Servidor')
      } else {
        this.apiService.newServer(this.server).subscribe(() =>{
          this.apiService.showMessage('Servidor Cadastrado Com Sucesso!')
          this.router.navigate(['/servers'])
        })
      }
    }
  }
  cancel(): void {
    this.router.navigate(['/servers'])
  }
}
