import { ApiService } from './../../api/api.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( 
    private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) {
      const token = window.localStorage.getItem('auth');
      if (token) {
        return true;
      } else {
        return this.router.parseUrl('/login');
      }
        
  }
  
}
