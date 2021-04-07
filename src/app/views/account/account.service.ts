import { Observable } from 'rxjs';
import { Login } from './../../components/models/login.model';
// import { ApiService } from './../../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { promise } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  //  login(Login: any){
  //   const result = this.apiService.doLogin;
  //   if (result && result.token) {
  //     window.localStorage.setItem('token', result.token);
  //     return true;
  //   }

  //   return false;
  // }

  saveAuthorizationToken(token: any){
    window.localStorage.setItem('auth', token);
  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('auth');
    return token;
  }
}
