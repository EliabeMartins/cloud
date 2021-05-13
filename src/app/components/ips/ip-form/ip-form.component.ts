import { Servidor } from './../../models/servidor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';
import { Ips } from '../../models/ips.model';

@Component({
  selector: 'app-ip-form',
  templateUrl: './ip-form.component.html',
  styleUrls: ['./ip-form.component.css']
})
export class IpFormComponent implements OnInit {

  server: Servidor = {
    ID:  ''
  }

  ips: Ips = {
    ID: '',
    IDSERV: '',
    IPINTERNOSERV: '',
    IPEXTERNOSERV: ''
  }


  constructor( 
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let SERVIDOR = this.route.snapshot.paramMap.get('id');
    this.apiService.serverById(`${SERVIDOR}`).subscribe(
      servidor => this.server = servidor);
  }

  novoIP(): void {
    let SERVIDOR = this.route.snapshot.paramMap.get('id');
    this.ips.IDSERV = this.server.ID;
    this.apiService.newServIp(this.ips).subscribe(() =>{
      this.apiService.showMessage('IP Cadastrado Com Sucesso!')
      this.router.navigate([`/ips/server/${SERVIDOR}`]);
    });
  }

  cancel(): void {
    let SERVIDOR = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/ips/server/${SERVIDOR}`]);
  }
}
