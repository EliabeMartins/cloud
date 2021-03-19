import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

// Modelos
import { Usuario } from './../components/usuario/usuario.model';
import { Servidor } from './../components/server/servidor.model';
import { Cliente } from './../components/cliente/cliente.model';

@Injectable({
    providedIn: 'root'
  })

export class ApiService {

    baseURL = 'http://localhost:3000';
    
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
    return this.http.post<Cliente>(`${this.baseURL}/cliente`, cliente);
  }
  // OBTEM TODOS OS CLIENTES NO BD
  getCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseURL}/clientes`);
  }






  // ********* METODOS DE SERVIDOR *********

  // INSERIR NOVO SERVIDOR
  newServer(server: Servidor): Observable<Servidor> {
    return this.http.post<Servidor>(`${this.baseURL}/servers`, server);
  }
  // OBTEM TODOS OS SERVIDORES NO BD
  getServer(): Observable<Servidor[]> {
    return this.http.get<Servidor[]>(`${this.baseURL}/servers`);
  }








  // ********* METODOS DE USUÁRIO *********
  newUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseURL}/user`, usuario);
  }

  // OBTEM TODOS OS USUÁRIOS NO BD
  getUser(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseURL}/users`);
  }




  
}