import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  titulo: string = 'Lista de Docentes';
  


  constructor() { }

  ngOnInit(): void {
  }

}
