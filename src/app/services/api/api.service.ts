import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //Se crea un servicio que permite consumir la api de las noticias con parametros de pais y categoria

  getNews(params: any): Observable<any>{
    const url = 'https://newsapi.org/v2/top-headlines?country='+params.country+'&category='+params.category+'&apiKey=54ab7ae52b9a4a5c877d562cd3ba08e4';
    return this.http.get(url);
  }
}
