import { Injectable } from '@angular/core';
import { Legajo } from '../models/legajo';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class LegajoService extends CommonService<Legajo> {

  protected baseEndpoint = 'http://localhost:8090/api/legajo'
  
}
