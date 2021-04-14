import { Dominio } from './../../models/dominio.model';
import { ApiService } from './../../../api/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dominio-form',
  templateUrl: './dominio-form.component.html',
  styleUrls: ['./dominio-form.component.css']
})
export class DominioFormComponent implements OnInit {

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
    private router: Router) { }

  ngOnInit(): void {
  }

  novoDominio(): void {
    this.apiService.newDominio(this.dominio).subscribe(() =>{
    this.router.navigate(['/dominios']);
    console.log(this.dominio)
    this.apiService.showMessage('Dominios Criado!')
    });
  }

  cancel(): void {
    this.router.navigate(['/dominios']);
  }
}
