import { Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Servidor } from './../../models/servidor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-read',
  templateUrl: './server-read.component.html',
  styleUrls: ['./server-read.component.css']
})
export class ServerReadComponent implements OnInit {

  servidors!: Servidor[];

  displayedColumns = ['ip', 'externo', 'action' ];

  constructor( 
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllServer().subscribe( 
      server => this.servidors = server)
  }



}
