import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class ApiService {

    private baseURL = 'http://localhost:3000';
    
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
}