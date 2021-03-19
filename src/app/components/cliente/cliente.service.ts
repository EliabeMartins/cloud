import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = 'http://localhost:3000';
  // private endpoint = 'clientes';
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


  // INSERIR NOVO CLIENTE
  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.baseURL}/cliente`, cliente);
  }

  // OBTEM TODOS OS CLIENTES NO BD
  Get(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.baseURL}/clientes`);
  }

}
