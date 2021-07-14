import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { map } from 'rxjs/operators';
import { Docente } from '../models/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  private baseEndpoint = 'http://localhost:8090/api/docentes'
  
  private cabeceras: HttpHeaders = new HttpHeaders({'content-Type':'application/json'})
  
  constructor(private http: HttpClient) { }

  public listar(): Observable<Docente[]>{
    return this.http.get<Docente[]>(this.baseEndpoint);
    /*return this.http.get<Docente[]>(this.baseEndpoint).pipe(
      map(docentes => docentes as Docente[])
      );*/
  }

  public listarPaginas(page: string, size: string): Observable<any>{
    const params = new HttpParams()
    .set('page', page)
    .set('size', size);
    return this.http.get<any>(`${this.baseEndpoint}/pagina`, {params: params});
  }

  public ver(id: number): Observable<Docente>{
    return this.http.get<Docente>(`${this.baseEndpoint}/${id}`);
  }

  public crear(docente: Docente): Observable<Docente>{
    return this.http.post<Docente>(this.baseEndpoint, docente, { headers: this.cabeceras});
  }

  public editar(docente: Docente): Observable<Docente>{
    return this.http.put<Docente>(`${this.baseEndpoint}/${docente.id}`, docente,{ headers: this.cabeceras} );
  }

  public eliminar(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

}
