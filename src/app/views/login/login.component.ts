import { AccountService } from './../account/account.service';
// import { AuthService } from './auth/auth.service';
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


  login: Login = new Login();

  constructor(
    private accountService: AccountService,
    private router: Router,
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
  }

  doLogin(): void {
    this.apiService.doLogin(this.login).subscribe((result) =>{
      this.apiService.showMessage('Login Realizado com Sucesso!');
      this.accountService.saveAuthorizationToken(result.token)
      this.router.navigate(['/']);
    });
  }


  // doLogin(): void {
    // try{
    //   this.apiService.doLogin(this.login).subscribe((result) =>{
    //     this.apiService.showMessage('Login Realizado com Sucesso!');
    //     this.accountService.saveAuthorizationToken(result.token)
    //     this.router.navigate(['/']);
    //   });
    // } catch (error) {
    //   this.apiService.showMessage('Usuario ou senha Incorreto!');
    //   this.router.navigate(['/login']);
    // }
    // }
}
