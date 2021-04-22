import { ApiService } from './../../../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Dominio } from '../../models/dominio.model';

@Component({
  selector: 'app-dominio-list',
  templateUrl: './dominio-list.component.html',
  styleUrls: ['./dominio-list.component.css']
})
export class DominioListComponent implements OnInit {

  dominios!: Dominio[];

  dominio: Dominio = {
    ID:'',
    IDSERVER:''
  }
  
  displayedColumns = ['DOMINIO', 'USER_N', 'IP_DB', 'N_DB', 'ACTION'];
  // displayedColumns = ['ID', 'DOMINIO', 'USER_N', 'IP_DB', 'N_DB', 'ACTION'];

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let IDSERVER = this.route.snapshot.paramMap.get('idd')
    this.apiService.getAllDominios(`${IDSERVER}`).subscribe(
      dominios => this.dominios = dominios);
      // console.log(`estou no server ${IDSERVER}`);
      
  }

  navigateToCreateDominio(): void {
    let IDSERVER = this.route.snapshot.paramMap.get('idd')
    this.router.navigate([`${IDSERVER}/new/dominio`])
  }

  cancel(): void {
    this.router.navigate(['/servers']);
  }

  delete(): void {
    let IDSERVER = this.route.snapshot.paramMap.get('idd')
    this.router.navigate([`${IDSERVER}/delete/dominio`]);
  }
}
