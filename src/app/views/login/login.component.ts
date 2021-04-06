import { Login } from './../../components/models/login.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // login: Login = {
  //   name: '', password: ''
  // }


  login: Login = new Login();

  constructor(
    private apiService: ApiService) { }

  ngOnInit(): void {
  }

  
  doLogin():void{
    console.log(this.login);
    // alert('oi');
    this.apiService.doLogin
  }

  
  // doLogin():void{
  //   alert('oi');
  //   this.apiService.doLogin("lucas","12345");
  // }

}
