import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-editar-docente',
  templateUrl: './editar-docente.component.html',
  styleUrls: ['./editar-docente.component.css']
})
export class EditarDocenteComponent implements OnInit {

  docente: Docente = null;

  constructor(
    private docenteService: DocenteService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.docenteService.detail(id).subscribe(
      data => {
       this.docente = data;
      }, err =>{
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listar-docente']);
      }
    )
  }

  onUpdate(): void {
    const id= this.activatedRoute.snapshot.params.id;
    this.docenteService.update(id, this.docente).subscribe(
      date =>{
        this.toastr.success('Datos actualizados', 'OK', {
         timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      }, 
      err =>{
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center'
         });
      }
    )

  }

}
