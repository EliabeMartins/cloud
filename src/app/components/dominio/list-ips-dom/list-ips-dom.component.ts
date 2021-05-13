import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';
import { Ips } from '../../models/ips.model';

@Component({
  selector: 'app-list-ips-dom',
  templateUrl: './list-ips-dom.component.html',
  styleUrls: ['./list-ips-dom.component.css']
})
export class ListIpsDomComponent implements OnInit {

  iddom!: string;
  idserv!:string;
  ips!: Ips[];

  displayedColumns = ['externo', 'action'];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let IDSERVER = this.route.snapshot.paramMap.get('id')
    this.idserv = `${IDSERVER}`;
    let IDDOM = this.route.snapshot.paramMap.get('idd')
    this.iddom = `${IDDOM}`;
    this.apiService.getIpsDom(`${IDDOM}`).subscribe(
      Ips => this.ips = Ips);      
  }

  novoIp(): void {
    let IDSERVER = this.route.snapshot.paramMap.get('id')
    let IDDOM = this.route.snapshot.paramMap.get('idd')
    this.router.navigate([`${IDSERVER}/${IDDOM}/new/ip`])
  }

  voltar(): void {
    let DOM = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`${DOM}/dominios`]);
  }
}
