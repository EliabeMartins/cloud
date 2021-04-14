import { ApiService } from './../../../api/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Dominio } from '../../models/dominio.model';

@Component({
  selector: 'app-dominio-list',
  templateUrl: './dominio-list.component.html',
  styleUrls: ['./dominio-list.component.css']
})
export class DominioListComponent implements OnInit {

  dominios!: Dominio[];
  displayedColumns = ['id', 'dominio', 'dbserver', 'action'];

  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllDominios().subscribe(
      dominios => this.dominios = dominios)
  }

  navigateToCreateDominio(): void {
    this.router.navigate(['new/dominio'])
  }

  cancel(): void {
    this.router.navigate(['/servers']);
  }
}
