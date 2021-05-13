import { Ips } from './../../models/ips.model';
import { Dominio } from './../../models/dominio.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-ip-dom',
  templateUrl: './update-ip-dom.component.html',
  styleUrls: ['./update-ip-dom.component.css']
})
export class UpdateIpDomComponent implements OnInit {
  
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
    let IDIP = this.route.snapshot.paramMap.get('iddd');
    this.apiService.IdIpDom(`${IDDOMINIO}`,`${IDIP}`).subscribe(
      ips => this.ips = ips);
  }

  atualizarIP(): void {
    // let IDSERVER = this.route.snapshot.paramMap.get('id')
    // let IDDOM = this.route.snapshot.paramMap.get('idd')
    // let IDIP = this.route.snapshot.paramMap.get('iddd');
    // this.ips.IDDOM = this.ips.ID;
    // this.apiService.DeletarIpDom(`${IDDOM}`,`${IDIP}`).subscribe(() =>{
    //   this.apiService.showMessage('IP Deletado Com Sucesso!');
    //   this.router.navigate([`${IDSERVER}/${IDDOM}/ips`])
    // })

    this.apiService.showMessage('FUNCIONA');
  }

  cancel(): void {
    let IDSERVER = this.route.snapshot.paramMap.get('id')
    let IDDOM = this.route.snapshot.paramMap.get('idd')
    this.router.navigate([`${IDSERVER}/${IDDOM}/ips`])
  }

}
