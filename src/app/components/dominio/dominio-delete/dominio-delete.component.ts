import { Dominio } from './../../models/dominio.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dominio-delete',
  templateUrl: './dominio-delete.component.html',
  styleUrls: ['./dominio-delete.component.css']
})
export class DominioDeleteComponent implements OnInit {

  dominios: Dominio[] = [];

  dominio: Dominio = {
    ID: '',
    IDSERVER: '',
    DOMINIO: '',
    NAMEUSER: '',
    PASSWORDUSER: '',
    IPBD: '',
    NAMEBD: '',
    PASSWORDBD: '',
  }


  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id')
    let IDSERVER = this.route.snapshot.paramMap.get('idd')
    this.apiService.dominioById(`${IDSERVER}`,`${id}`).subscribe(
      dominios => this.dominio = dominios);
    
  }

  DeletarDominio(): void {
    let id = this.route.snapshot.paramMap.get('id')
    let IDSERVER = this.route.snapshot.paramMap.get('idd')
    this.apiService.delDominio(`${IDSERVER}`,`${id}`).subscribe(() =>{
      this.apiService.showMessage('Dominio Deletado Com Sucesso!')
      // console.log(this.dominio);
      this.router.navigate([`${IDSERVER}/dominios`]);
    });
  }

  cancel(): void {
    let IDSERVER = this.route.snapshot.paramMap.get('idd')
    this.router.navigate([`${IDSERVER}/dominios`]);
  }
}
