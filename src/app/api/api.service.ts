import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// Modelos
import { Usuario } from './../components/usuario/usuario.model';
import { Servidor } from './../components/server/servidor.model';
import { Cliente } from './../components/cliente/cliente.model';

@Injectable({
    providedIn: 'root'
  })

export class ApiService {

    baseURL = 'http://localhost:3000/';

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
    constructor(
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


  // ********* METODOS DE CLIENTES *********

  // INSERIR NOVO CLIENTE
  newCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseURL, cliente);
  }
  // OBTEM TODOS OS CLIENTES NO BD
  getCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseURL}clientes`);
  }
  // OBTEM TODOS OS CLIENTES NO BD




  // ############ METODOS DE SERVIDOR ############

  // INSERIR NOVO SERVIDOR
  newServer(server: Servidor): Observable<Servidor> {
    return this.http.put<Servidor>(`${this.baseURL}servers`, server);
  }
  // OBTEM TODOS OS SERVIDORES NO BD
  getServer(): Observable<Servidor[]> {
    return this.http.get<Servidor[]>(`${this.baseURL}servers`);
  }
  // OBTEM DADOS DE UM SERVIDOR
  serverById(id: string): Observable<Servidor>{
    const url = `${this.baseURL}servers/${id}`
    return this.http.get<Servidor>(url)
  }
  // ATUALIZA DADOS DO SERVIDOR
  serverUpdate(server: Servidor): Observable<Servidor> {
    const url = `${this.baseURL}servers/${server.ID}`
    return this.http.put<Servidor>(url, server)
  }

  // ################################################















  // ********* METODOS DE USUÁRIO *********
  newUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseURL}/user`, usuario);
  }

  // OBTEM TODOS OS USUÁRIOS NO BD
  getUser(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseURL}/users`);
  }


  // *********  METODO DE LOGIN *********
  // doLogin(login:string, password:string):void{
  //   this.http.post<any>('http://localhost:3000/login/', { login: login,password:password }).subscribe(data => {
  //     console.log("Hello:" + data.payLoad.name);
  //   })
  // }
  



















  // getAll(): Observable<any> {
  //   return this.http.get(baseUrl);
  // }

  // get(id): Observable<any> {
  //   return this.http.get(`${baseUrl}/${id}`);
  // }

  // create(data): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }

  // update(id, data): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }
}