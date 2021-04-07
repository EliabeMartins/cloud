import { AccountService } from './../views/account/account.service';
import { Login } from './../components/models/login.model';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Modelos
import { Usuario } from '../components/models/usuario.model';
import { Servidor } from '../components/models/servidor.model';
import { Cliente } from '../components/models/cliente.model';


@Injectable({
    providedIn: 'root'
  })

export class ApiService {

    baseURL = 'http://localhost:3000/';

    constructor(
        private accountService: AccountService,
        private http: HttpClient,
        private snackBar: MatSnackBar) { }

   // NOTIFICAÇÃO DE CRIAÇÃO 
    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg,  '', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ['msg-error'] : ['msg-success']
        })
  }

  // *********  METODO DE LOGIN *********
  doLogin(login: Login): Observable<Login> {
    return this.http.post<Login>(`${this.baseURL}login`, login);

  }

  getHttpOptions(){
    let token = 'Bearer ' + this.accountService.getAuthorizationToken();
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
      })
    };
    return httpOptions;
  }

  // ********* CLIENTES *********
  getAllCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseURL}clientes`);
  }
  newCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseURL}clientes`, cliente);
  }
  clientById(ID: string): Observable<Cliente> {
    const url = `${this.baseURL}clientes/${ID}`
    return this.http.get<Cliente>(url)
  }
  updateClient(cliente: Cliente): Observable<Cliente>{
    const url = `${this.baseURL}clientes/${cliente.ID}`
    return this.http.patch<Cliente>(url, cliente)
  }
  delClient(ID: string): Observable<Cliente>{
    const url = `${this.baseURL}clientes/${ID}`
    return this.http.delete<Cliente>(url);
  }

  // ############ SERVIDOR ############
  getAllServer(): Observable<Servidor[]> {
    return this.http.get<Servidor[]>(`${this.baseURL}servers`, this.getHttpOptions());
  }
  newServer(server: Servidor): Observable<Servidor> {
    return this.http.post<Servidor>(`${this.baseURL}servers`, server, this.getHttpOptions());
  }
  serverById(ID: string): Observable<Servidor>{
    const url = `${this.baseURL}servers/${ID}`
    return this.http.get<Servidor>(url)
  }
  updateServer(server: Servidor): Observable<Servidor> {
    const url = `${this.baseURL}servers/${server.ID}`
    return this.http.patch<Servidor>(url, server)
  }
  delServer(ID: string): Observable<Servidor>{
    const url = `${this.baseURL}servers/${ID}`
    return this.http.delete<Servidor>(url);
  }

  // ********* USUÁRIO *********
  getAllUser(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseURL}users`);
  }
  newUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseURL}/users`, usuario);
  }
  userById(ID: string): Observable<Usuario>{
    const url = `${this.baseURL}users/${ID}`
    return this.http.get<Usuario>(url)
  }
  updateUser(server: Usuario): Observable<Usuario> {
    const url = `${this.baseURL}users/${server.ID}`
    return this.http.put<Usuario>(url, server)
  }
  delUser(ID: string): Observable<Usuario>{
    const url = `${this.baseURL}users/${ID}`
    return this.http.delete<Usuario>(url);
  }

}