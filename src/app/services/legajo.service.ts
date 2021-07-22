import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Legajo } from '../models/legajo';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class LegajoService extends CommonService<Legajo> {

  protected baseEndpoint = 'http://localhost:8090/api/legajo'

  constructor(http: HttpClient){
    super(http);
  }

  public crearLegajo(legajo: Legajo, archivo: File): Observable<Legajo>{
    const formData = new FormData();
    formData.append('archivo', archivo)
    formData.append('nombre', legajo.nombre)
    return this.http.post<Legajo>(this.baseEndpoint + '/crear-con-documento', FormData)
  }

  public editarLegajo(legajo: Legajo, archivo: File): Observable<Legajo>{
    const formData = new FormData();
    formData.append('archivo', archivo)
    formData.append('nombre', legajo.nombre)
    return this.http.put<Legajo>(`${this.baseEndpoint}/editar-con-documento/${legajo.id}`, FormData)
  }
  
}
