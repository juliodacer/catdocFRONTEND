import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { map } from 'rxjs/operators';
import { Docente } from '../models/docente';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class DocenteService extends CommonService<Docente> {

  protected baseEndpoint = 'http://localhost:8090/api/docentes'

  constructor(http: HttpClient) { 
    super(http)
  }
  
}
