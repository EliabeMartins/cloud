import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './../../components/models/usuario.model';
import { ApiService } from './../../api/api.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: Usuario[];
  displayedColumns = ['id', 'name', 'email', 'action'];

  constructor(
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit(): void {
    this.apiService.getAllUser().subscribe( 
      users => this.users = users)
  }

  navigateToCreateUsuario(): void {
    this.router.navigate(['new/user'])
  }


}
