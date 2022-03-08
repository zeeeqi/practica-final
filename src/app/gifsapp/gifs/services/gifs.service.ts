import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = 'OFVXvNhOLkUDRozA6S3PIVEjLZPCS2Y7';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

  private _historial: string[] = JSON.parse(localStorage.getItem('historial')!) || [];
  public resultados: Gif[] = JSON.parse(localStorage.getItem('resultado')!) || [];

  constructor(private http: HttpClient) { }

  get historial(): string[] {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10)

      localStorage.setItem('historial', JSON.stringify(this._historial))
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 10)
      .set('q', query)

    const newLocal = this;
    newLocal.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params })
      .subscribe(resp => {
        this.resultados = resp.data;

        localStorage.setItem('resultado', JSON.stringify(resp.data));
      })

  }

}
