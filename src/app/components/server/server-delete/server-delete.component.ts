import { Servidor } from './../../models/servidor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-delete',
  templateUrl: './server-delete.component.html',
  styleUrls: ['./server-delete.component.css']
})
export class ServerDeleteComponent implements OnInit {

  server!: Servidor

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // let ID = this.route.snapshot.paramMap.get('id')
    // this.apiService.serverById(`${ID}`).subscribe(server => {
    //   this.server = server;
    // });
  }

  DeletarServidor(): void {
    this.apiService.delClient(`${this.server.ID}`).subscribe(() =>{
      this.apiService.showMessage('Servidor Deletado Com Sucesso!')
      this.router.navigate(['/servers']);
    });
  }

  cancel(): void {
    this.router.navigate(['/servers']);
  }

}
