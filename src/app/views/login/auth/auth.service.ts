import { Router } from '@angular/router';
import { Login } from './../../../components/models/login.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginAutenticado: boolean = false;

  constructor(private router: Router) { }

  doLogin(login: Login){
    if (login.name === 'eliabe' && login.password === '12345'){
      this.loginAutenticado = true;
      this.router.navigate(['/']);
    }else{
      this.loginAutenticado = false;
    }
  }
}
