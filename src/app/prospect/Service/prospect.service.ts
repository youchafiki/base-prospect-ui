import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prospect } from '../model/prospect';

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS,POST, PUT",
  
  
  })
};

@Injectable({
  providedIn: 'root'
})

export class ProspectService {


  private heroesUrl = 'http://localhost:8080/api/prospect'; 

  constructor(private http: HttpClient) { }

  getProspects() : Observable<Prospect[]>{
    return this.http.get<Prospect[]>(this.heroesUrl,optionRequete)
  }
}
