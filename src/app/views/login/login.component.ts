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
    private router: Router,
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
  }

  doLogin():void{
    // this.auth.doLogin(this.login);
    this.apiService.doLogin(this.login).subscribe(() =>{
      this.apiService.showMessage('Login Realizado com Sucesso!')
      this.router.navigate(['/'])
    });
  }
}
