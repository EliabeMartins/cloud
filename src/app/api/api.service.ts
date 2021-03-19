
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Usuario } from './../components/usuario/usuario.model';
@Injectable({
    providedIn: 'root'
  })

export class ApiService {

    baseURL = 'http://localhost:3000';
    
    constructor(
        private http: HttpClient,
        private snackBar: MatSnackBar) { }

   // MENSAGEM DE ALERTA
    showMessage(msg: string): void {
        this.snackBar.open(msg,  '', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
        })
  }

  // INSERIR NOVO USUÁRIO
  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.baseURL}/user`, usuario);
  }

  // OBTEM TODOS OS USUÁRIOS NO BD
  Get(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseURL}/users`);
  }
}