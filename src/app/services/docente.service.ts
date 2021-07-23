import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Docente } from '../models/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  docenteURL = environment.docenteURL;

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Docente[]> {
    return this.httpClient.get<Docente[]>(this.docenteURL + 'list')
  }

  public detail(id: number): Observable<Docente> {
    return this.httpClient.get<Docente>(this.docenteURL + `detail/${id}`)
  }

  public detailName(name: string): Observable<Docente> {
    return this.httpClient.get<Docente>(this.docenteURL + `detail/${name}`)
  }

  public save(docente: Docente): Observable<any> {
    return this.httpClient.post<any>(this.docenteURL + 'create', docente);
  }

  public update(id: number, docente: Docente): Observable<any> {
    return this.httpClient.put<any>(this.docenteURL + `update/${id}`, docente);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.docenteURL + `delete/${id}`);
  }

}
