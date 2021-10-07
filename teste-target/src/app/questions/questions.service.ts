import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Faturamento } from './models/Faturamento';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:44398/api/Question';

  getMenorFaturamento(): Observable<Faturamento> {
    return this.http.get<Faturamento>(`${this.url}/menorFat/`);  
  } 
  
  getMaiorFaturamento(): Observable<Faturamento> {
    return this.http.get<Faturamento>(`${this.url}/maiorFat/`);  
  } 

  getAcimaMediaFat(): Observable<Faturamento[]> {
    return this.http.get<Faturamento[]>(`${this.url}/acimaMedia/`);  
  } 
}
