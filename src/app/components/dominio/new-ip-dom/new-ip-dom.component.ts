import { Dominio } from './../../models/dominio.model';
import { Ips } from './../../models/ips.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-ip-dom',
  templateUrl: './new-ip-dom.component.html',
  styleUrls: ['./new-ip-dom.component.css']
})
export class NewIpDomComponent implements OnInit {

  dominio: Dominio ={
    ID:''
  }

  ips: Ips = {
    ID: '',
    IDDOM: '',
    IPEXTERNODOM: ''
  }


  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let IDSERVIDOR  = this.route.snapshot.paramMap.get('id');
    let IDDOMINIO = this.route.snapshot.paramMap.get('idd');
    this.apiService.dominioById(`${IDSERVIDOR}`,`${IDDOMINIO}`).subscribe(
      dominio => this.dominio = dominio);
  }

  novoIP(): void {
    let IDSERVIDOR  = this.route.snapshot.paramMap.get('id');
    let IDDOMINIO = this.route.snapshot.paramMap.get('idd');
    this.ips.IDDOM = this.dominio.ID;
    this.apiService.newIpDom(this.ips).subscribe(() =>{
      this.apiService.showMessage('IP Cadastrado Com Sucesso!');
      this.router.navigate([`${IDSERVIDOR}/${IDDOMINIO}/ips`])
    })
  }

  cancel(): void {
    let IDSERVER = this.route.snapshot.paramMap.get('id')
    let IDDOM = this.route.snapshot.paramMap.get('idd')
    this.router.navigate([`${IDSERVER}/${IDDOM}/ips`])
  }
}
