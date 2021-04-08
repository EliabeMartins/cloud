import { AccountService } from './../account/account.service';
import { Login } from './../../components/models/login.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // login: Login = new Login();

  login: Login = {
    name: '',
    password: ''
    // token: ''
  }
  constructor(
    private accountService: AccountService,
    private router: Router,
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
  }

  doLogin(): void {
    if (this.login.name === "") {
      this.apiService.showMessage('INFORME NOME DE USUÁRIO')
    } else {
      if(this.login.password === ""){
        this.apiService.showMessage('INFORME SENHA PARA CONTINUAR')
        this.router.navigate(['/login']);
      } else {
        this.apiService.doLogin(this.login).subscribe((result) =>{
          this.apiService.showMessage('Login Realizado com Sucesso!');
          this.accountService.saveAuthorizationToken(result.token)
          this.router.navigate(['/']);
        });
      }
    }
  }


}
