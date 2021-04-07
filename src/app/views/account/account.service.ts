import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  saveAuthorizationToken(token: any){
    window.localStorage.setItem('auth', token);
  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('auth');
    return token;
  }

  onLogout(){
    window.localStorage.removeItem('auth');
  }
  
}
