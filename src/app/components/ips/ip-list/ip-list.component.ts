import { Ips } from './../../models/ips.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip-list',
  templateUrl: './ip-list.component.html',
  styleUrls: ['./ip-list.component.css']
})
export class IpListComponent implements OnInit {

  idserver!: string;
  ips!: Ips[];

  displayedColumns = ['interno', 'externo', 'action'];

  constructor( 
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let IDSERV = this.route.snapshot.paramMap.get('idd')
    this.idserver = `${IDSERV}`;
    this.apiService.getAllServIps(`${IDSERV}`).subscribe(
      Ips => this.ips = Ips);      
  }


  novoIp(): void {
    let IDSERV = this.route.snapshot.paramMap.get('idd')
    this.router.navigate([`/ips/adc/${IDSERV}`])
  }

  voltar(): void {
    this.router.navigate(['/servers'])
  }
}
