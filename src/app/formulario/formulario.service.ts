import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  message: string = '';
  url: string = 'https://ruizgijon.ddns.net/arenillae/propuestas.php'

  constructor(private http: HttpClient) { }

  send(value: string): any {

    return this.http.post(this.url, value)

  }
}
