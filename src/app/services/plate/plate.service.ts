import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plate } from 'src/app/models/plate';
@Injectable({
  providedIn: 'root'
})
export class PlateService {

  private urlBase = "http://localhost:8080/v1.0/pico-placa/";
  constructor(private clintHttp: HttpClient) { }

  getPlateList(): Observable<Plate[]>{
    return this.clintHttp.get<Plate[]>(this.urlBase.concat("plates"));
  }
  createPlate(plate: Plate): Observable<Object> {
    return this.clintHttp.post<Plate>(this.urlBase.concat("createdPlate"), plate);
  }
  canCirculate(plateNumber: string): Observable<{[key: string]: string}> {
    return this.clintHttp.get<{[key: string]: string}>(this.urlBase.concat("can-circulate/").concat(plateNumber));
  }
  deletePlate(plateNumber: string): Observable<any> {
  return this.clintHttp.delete(this.urlBase.concat("plates/").concat(plateNumber));
}
}
