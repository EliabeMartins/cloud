import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../api/api.service';
import { Servidor } from '../../models/servidor.model';
@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  servidors!: Servidor[];
  displayedColumns = ['id', 'name', 'ip', 'snmp', 'action'];
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllServer().subscribe( 
      server => this.servidors = server)
  }

}
