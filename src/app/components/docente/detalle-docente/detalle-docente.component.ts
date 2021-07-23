import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-detalle-docente',
  templateUrl: './detalle-docente.component.html',
  styleUrls: ['./detalle-docente.component.css'],
})
export class DetalleDocenteComponent implements OnInit {
  docente: Docente = null;

  constructor(
    private docenteService: DocenteService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.docenteService.detail(id).subscribe(
      (data) => {
        this.docente = data;
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['lista-docente'])
  }
}
