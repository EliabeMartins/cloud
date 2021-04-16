import { Servidor } from './../../models/servidor.model';
import { Dominio } from './../../models/dominio.model';
import { ApiService } from './../../../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dominio-form',
  templateUrl: './dominio-form.component.html',
  styleUrls: ['./dominio-form.component.css']
})

export class DominioFormComponent implements OnInit {

  servidor: Servidor = {
    IP: '',
    NAME: ''
  }
  
  dominios!: Dominio[];

  dominio: Dominio = {
    ID: '',
    IDSERVER: '',
    DOMINIO: '',
    NAMEUSER: '',
    PASSWORDUSER: '',
    IPBD: '',
    NAMEBD: '',
    PASSWORDBD: '',
    INSTALLWP: false,
    SSL: false,
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


    let IDSERVER = this.route.snapshot.paramMap.get('id');
    this.apiService.getAllDominios(`${IDSERVER}`).subscribe(
      dominios => this.dominios = dominios);
  }

  novoDominio(): void {
    if (this.dominio.SSL === false) {
      this.apiService.showMessage('ATIVE O SSL PARA CONTINUAR');
    } else {
      if (this.dominio.DOMINIO === "") {
        this.apiService.showMessage('Informe o Domínio!');
      } else {
        if (this.dominio.NAMEUSER === "") {
          this.apiService.showMessage('Informe o Nome para o Usuário');
        } else {
          if (this.dominio.PASSWORDUSER === "") {
            this.apiService.showMessage('Por favor Informe Senha para o Usuário!');
          } else {
                  if (this.dominio.DATABASE === false) {
                    let IDSERVER = this.route.snapshot.paramMap.get('id');
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
                      } else {
                        if (this.dominio.PASSWORDBD === "") {
                          this.apiService.showMessage('Por favor Informe Senha para o Banco de Dados');
                        } else {
                          if (this.dominio.IDSERVER === "") {
                            this.apiService.showMessage('Informe ID do servidor para continuar');
                          } else {
                            let IDSERVER = this.route.snapshot.paramMap.get('id');
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
  }

  cancel(): void {
    let IDSERVER = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`${IDSERVER}/dominios`]);
  }
}
