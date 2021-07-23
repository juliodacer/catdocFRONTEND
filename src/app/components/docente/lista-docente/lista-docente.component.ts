import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-lista-docente',
  templateUrl: './lista-docente.component.html',
  styleUrls: ['./lista-docente.component.css'],
})
export class ListaDocenteComponent implements OnInit {
  titulo: string = 'Lista de Docentes';
  docentes: Docente[] = [];

  constructor(
    private docenteService: DocenteService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.cargarDocentes();
  }

  cargarDocentes(): void {
    this.docenteService.list().subscribe(
      (data) => {
        this.docentes = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminar(id: number) {
    this.docenteService.delete(id).subscribe(
      (data) => {
        this.toastr.success('Docente Eliminado', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
        this.cargarDocentes();
      },
      (err) => {
        this.toastr.error('Docente Eliminado', 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }
}
