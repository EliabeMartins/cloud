import { Servidor } from './../../models/servidor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';
import { Ips } from '../../models/ips.model';

@Component({
  selector: 'app-ip-update',
  templateUrl: './ip-update.component.html',
  styleUrls: ['./ip-update.component.css']
})
export class IpUpdateComponent implements OnInit {
  
  server: Servidor = {
    ID:  ''
  }
  
  idserver!: string;
  ips: Ips ={
  }

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    let IDSERV = this.route.snapshot.paramMap.get('idd')
    // this.idserver = `${IDSERV}`;
    this.apiService.getIdServ(`${IDSERV}`,`${id}`).subscribe(
        Ips => this.ips = Ips);
  }

  atualizarIP(): void {
    let id = this.route.snapshot.paramMap.get('id')
    let IDSERV = this.route.snapshot.paramMap.get('idd')
    this.ips.IDSERV = this.server.ID;
    this.apiService.UpdateIpServ(`${IDSERV}`,`${id}`).subscribe(() =>{
      this.apiService.showMessage('IP Atualizado Com Sucesso!')
      this.router.navigate([`/ips/server/${IDSERV}`]);
    });
  }

  cancel(): void {
    let IDSERV = this.route.snapshot.paramMap.get('idd');
    this.router.navigate([`/ips/server/${IDSERV}`]);
  }
}
