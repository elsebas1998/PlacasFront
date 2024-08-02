import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { restriccion } from 'src/app/models/restriccion';

@Injectable({
  providedIn: 'root'
})
export class RestriccionService {
  private urlBase = "https://placas-production.up.railway.app/v1.0/pico-placa/";

  constructor(private clientHttp: HttpClient) { }

  getRestriccionList(): Observable<restriccion[]> {
    return this.clientHttp.get<restriccion[]>(this.urlBase + "restriccion");
  }

  createRestriccion(restriccion: restriccion): Observable<Object> {
    return this.clientHttp.post<restriccion>(this.urlBase + "createdRestriccion", restriccion);
  }
  deleteRestriccion(restriccionId: number): Observable<any> {
    return this.clientHttp.delete(`${this.urlBase}restriccion/${restriccionId}`);
  }
}
