import { Servidor } from './../../models/servidor.model';
import { Dominio } from './../../models/dominio.model';
import { ApiService } from './../../../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
//
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-dominio-form',
  templateUrl: './dominio-form.component.html',
  styleUrls: ['./dominio-form.component.css']
})

export class DominioFormComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  servidor: Servidor = {
    IP: '',
    NAME: ''
  }
  
  dominios!: Dominio[];

  dominio: Dominio = {
    ID: '',
    IDSERVER: '',
    DOMINIO: '',
    IPEXTERNO: '',
    NAMEUSER: '',
    PASSWORDUSER: '',
    IPBD: '',
    NAMEBD: '',
    USERBD: '',
    PASSWORDBD: '',
    DATABASE: false
  }

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let SERVIDOR = this.route.snapshot.paramMap.get('id');
    this.apiService.serverById(`${SERVIDOR}`).subscribe(
      servidor => this.servidor = servidor);
      console.log(`aqui é o server ${SERVIDOR}`);

    let IDSERVER = this.route.snapshot.paramMap.get('idd');
    this.apiService.getAllDominios(`${IDSERVER}`).subscribe(
      dominios => this.dominios = dominios);

      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  novoDominio(): void {
    if (this.dominio.DOMINIO === ""){
      this.apiService.showMessage('Informe o Domínio!');
    }else{
      if (this.dominio.NAMEUSER === "") {
        this.apiService.showMessage('Informe o Nome para o Usuário');
      } else {
        if (this.dominio.PASSWORDUSER === "") {
          this.apiService.showMessage('Por favor Informe Senha para o Usuário!');
        } else {
          if (this.dominio.DATABASE === false) {
            let IDSERVER = this.route.snapshot.paramMap.get('id');
                    this.dominio.IDSERVER = this.servidor.ID;
                    this.apiService.newDominio(this.dominio).subscribe(() =>{                              
                    this.router.navigate([`${IDSERVER}/dominios`]);
                    this.apiService.showMessage('Dominio Criado com Sucesso!');
                    });
          } else {
            if (this.dominio.IPBD === "") {
              this.apiService.showMessage('Informe o IP do Banco de Dados');
            } else {
              if (this.dominio.NAMEBD === "") {
                this.apiService.showMessage('Informe o Nome do Banco');
              }else{
                if (this.dominio.PASSWORDBD === "") {
                  this.apiService.showMessage('Por favor Informe Senha para o Banco de Dados');
                } else {
                  if (this.dominio.USERBD === "") {
                    this.apiService.showMessage('Informe Nome do Usuário do Banco');
                  } else {
                    let IDSERVER = this.route.snapshot.paramMap.get('id');
                      this.dominio.IDSERVER = this.servidor.ID;
                      this.apiService.newDominio(this.dominio).subscribe(() =>{                              
                      this.router.navigate([`${IDSERVER}/dominios`]);
                      this.apiService.showMessage('Dominio Criado com Sucesso!');
                      });
                  }
                }
              }
            } 
          }
        }
      }
    }
  }

  cancel(): void {
    let SERVIDOR = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`${SERVIDOR}/dominios`]);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
