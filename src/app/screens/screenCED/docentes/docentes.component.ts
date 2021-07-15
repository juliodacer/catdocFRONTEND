import { Component, OnInit, ViewChild } from '@angular/core';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { CommonListarComponent } from 'src/app/components/common-listar.component';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css'],
})
export class DocentesComponent extends CommonListarComponent<Docente, DocenteService> implements OnInit {
 
  constructor(service: DocenteService){
    super(service);
    this.titulo = 'Lista de Docentes';
    this.nombreModel = Docente.name;
  }
}
