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

  
  // dominio!: Dominio;

  dominio: Dominio = {
    ID: '',
    DOMINIO: '',
    NAME_USER: '',
    PASSWORD_USER: '',
    IP_BD: '',
    NAME_BD: '',
    PASSWORD_BD: '',
  }


  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let ID = this.route.snapshot.paramMap.get('id')
    this.apiService.dominioById(`${ID}`).subscribe(dominio => {
      this.dominio = dominio;
    });
  }

  DeletarDominio(): void {
    this.apiService.delDominio(`${this.dominio.ID}`).subscribe(() =>{
      this.apiService.showMessage('Dominio Deletado Com Sucesso!')
      console.log(this.dominio);
      this.router.navigate(['/dominios']);
    });
  }

  cancel(): void {
    this.router.navigate(['/dominios']);
  }
}
