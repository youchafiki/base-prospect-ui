import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prospect } from '../model/prospect';
import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../../environments/environment';



const optionRequete = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods' : 'GET, HEAD, OPTIONS, POST, PUT'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ProspectService {

  private prospectUrl = environment.apiUrl+'/api/prospect';

  constructor(private http: HttpClient, private keycloakService: KeycloakService) { }

  getProspects(): Observable<Prospect[]> {
      console.log(this.keycloakService.getToken());
      const headers_object = new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.keycloakService.getToken()
  });

      const httpOptions = {
          headers: headers_object
      };
    return this.http.get<Prospect[]>(this.prospectUrl, httpOptions);
  }
 addProspects(prospect: Prospect): Observable<Prospect> {
    console.log(prospect);
    return this.http.post<Prospect>(this.prospectUrl, prospect, optionRequete);
  }
}
