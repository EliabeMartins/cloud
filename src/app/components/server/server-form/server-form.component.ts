import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servidor } from './../servidor.model';
import { ServidorService } from './../servidor.service';

//
@Component({
  selector: 'app-server-form',
  templateUrl: './server-form.component.html',
  styleUrls: ['./server-form.component.css']
})

export class ServerFormComponent implements OnInit {

  server: Servidor = {
    name: '',
    ip: ''
  }
  constructor(
    private servidorService: ServidorService,  
    private router: Router) { }

  ngOnInit(): void {
  }

  newServer(): void {
    this.servidorService.create(this.server).subscribe(() =>{
      this.servidorService.showMessage('Servidor Cadastrado!')
      this.router.navigate(['/servers'])
    })
  }

  cancel(): void {
    this.router.navigate(['/servers'])
  }
}
