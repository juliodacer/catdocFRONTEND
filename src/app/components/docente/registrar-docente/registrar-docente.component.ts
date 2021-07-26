import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-registrar-docente',
  templateUrl: './registrar-docente.component.html',
  styleUrls: ['./registrar-docente.component.css']
})
export class RegistrarDocenteComponent implements OnInit {

  titulo: "Registrar Docente";
  docente = new Docente();

  constructor(
              private docenteService: DocenteService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    /* const docente = new Docente(docente); */
    this.docenteService.save(this.docente).subscribe(
      data => {
        this.toastr.success('Producto Creado', 'OK', {
          timeOut: 3000
        });
        this.router.navigate(['/']);
      }, err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000
        });
        this.router.navigate(['/']);
      }
    )
  }

}
