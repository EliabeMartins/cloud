
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
import { Dominio } from '../components/models/dominio.model';
import { Tipo } from '../components/models/tipo.model';


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
    showMessage(msg: string): void {
        this.snackBar.open(msg,  '', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
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
    return this.http.get<Cliente[]>(`${this.baseURL}clientes`, this.getHttpOptions());
  }
  newCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseURL}clientes`, cliente, this.getHttpOptions());
  }
  clientById(ID: string): Observable<Cliente> {
    const url = `${this.baseURL}clientes/${ID}`
    return this.http.get<Cliente>(url, this.getHttpOptions())
  }
  updateClient(cliente: Cliente): Observable<Cliente>{
    const url = `${this.baseURL}clientes/${cliente.ID}`
    return this.http.patch<Cliente>(url, cliente, this.getHttpOptions())
  }
  delClient(ID: string): Observable<Cliente>{
    const url = `${this.baseURL}clientes/${ID}`
    return this.http.delete<Cliente>(url, this.getHttpOptions());
  }

  // ############ TIPO ##############
  getAllTipo(): Observable<Tipo[]> {
    return this.http.get<Tipo[]>(`${this.baseURL}tipos`, this.getHttpOptions());
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
    return this.http.get<Servidor>(url, this.getHttpOptions());
  }
  updateServer(server: Servidor): Observable<Servidor> {
    const url = `${this.baseURL}servers/${server.ID}`
    return this.http.patch<Servidor>(url, server, this.getHttpOptions());
  }
  delServer(ID: string): Observable<Servidor>{
    const url = `${this.baseURL}servers/${ID}`
    return this.http.delete<Servidor>(url, this.getHttpOptions());
  }

  // ############ DOMÍNIOS ############
  getAllDominios(IDSERVER: string): Observable<Dominio[]> {
    const url = `${this.baseURL}dominios/${IDSERVER}`
    return this.http.get<Dominio[]>(url, this.getHttpOptions());
  }
  newDominio(dominio: Dominio): Observable<Dominio> {
    return this.http.post<Dominio>(`${this.baseURL}dominios`, dominio, this.getHttpOptions());
  }
  dominioById(IDSERVER: string, ID: string): Observable<Dominio>{
    const url = `${this.baseURL}dominios/${IDSERVER}/${ID}`
    return this.http.get<Dominio>(url, this.getHttpOptions());
  }
  delDominio(IDSERVER: string, ID: string): Observable<Dominio[]>{
    const url = `${this.baseURL}dominios/${IDSERVER}/${ID}`
    return this.http.delete<Dominio[]>(url, this.getHttpOptions());
  }
  // delDominio(ID: string): Observable<Dominio>{
  //   const url = `${this.baseURL}dominios/${ID}`
  //   return this.http.delete<Dominio>(url);
  // }



  
  // ********* USUÁRIO *********
  getAllUser(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseURL}users`, this.getHttpOptions());
  }
  newUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseURL}users`, usuario, this.getHttpOptions());
  }
  userById(ID: string): Observable<Usuario>{
    const url = `${this.baseURL}users/${ID}`
    return this.http.get<Usuario>(url, this.getHttpOptions())
  }
  updateUser(server: Usuario): Observable<Usuario> {
    const url = `${this.baseURL}users/${server.ID}`
    return this.http.patch<Usuario>(url, server, this.getHttpOptions())
  }
  delUser(ID: string): Observable<Usuario>{
    const url = `${this.baseURL}users/${ID}`
    return this.http.delete<Usuario>(url, this.getHttpOptions());
  }
}