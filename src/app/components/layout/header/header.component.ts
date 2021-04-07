import { Router } from '@angular/router';
import { ApiService } from './../../../api/api.service';
import { AccountService } from './../../../views/account/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogout(): void{
    this.accountService.onLogout();
    this.apiService.showMessage('Logout Feito!');
    this.router.navigate(['/login']);
  }
}
