import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Servidor } from './servidor.model'


@Injectable({
  providedIn: 'root'
})
export class ServidorService {
  
  private baseURL = 'http://localhost:3000';
  // private endpoint = 'servers';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

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
  
  // INSERIR NOVO SERVIDOR
  create(server: Servidor): Observable<Servidor> {
    return this.http.post<Servidor>(`${this.baseURL}/servers`, server);
  }

  // OBTEM TODOS OS SERVIDORES NO BD
  Get(): Observable<Servidor[]> {
    return this.http.get<Servidor[]>(`${this.baseURL}/servers`);
  }

  // public getServers(){
  //   return this.http.get(`${this.baseURL}/servers`);
  // }

}
