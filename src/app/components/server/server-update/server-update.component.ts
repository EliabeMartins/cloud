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

  server!: Servidor

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
  }

  AtualizarServidor(): void {
    this.apiService.updateServer(this.server).subscribe(() =>{
      this.apiService.showMessage('Servidor Atualizado!')
      this.router.navigate(['/servers'])
    })
  }

  cancel(): void {
    this.router.navigate(['/servers'])
  }
}
