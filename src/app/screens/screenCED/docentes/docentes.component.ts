import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  titulo: string = 'Lista de Docentes';
  docentes: Docente[];

  constructor(private service: DocenteService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(docentes => this.docentes = docentes);
  }

}
