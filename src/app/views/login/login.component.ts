import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private apiService:ApiService) { }

  ngOnInit(): void {
  }

  doLogin():void{
    alert('oi');
    // this.apiService.doLogin("lucas","12345");
  }

}
