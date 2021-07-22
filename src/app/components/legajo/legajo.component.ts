import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Legajo } from 'src/app/models/legajo';
import { LegajoService } from 'src/app/services/legajo.service';
import Swal from 'sweetalert2';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-legajo',
  templateUrl: './legajo.component.html',
  styleUrls: ['./legajo.component.css']
})
export class LegajoComponent extends CommonFormComponent<Legajo, LegajoService>implements OnInit {

  private docSelecionado: File;

  constructor(service: LegajoService,
    router: Router,
    route: ActivatedRoute) { 
    super(service, router, route);
    this.titulo = 'Subir documentos',
    this.model = new Legajo();
    this.redirect = '/legajo';
    this.nombreModal = Legajo.name;      
    }

    public seleccionarDoc(event): void {
      this.docSelecionado = event.target.files[0];
      console.log(this.docSelecionado);
    }

    public crear(): void {
      if(!this.docSelecionado){
        super.crear();
      }else{
        this.service.crearLegajo(this.model, this.docSelecionado).subscribe(legajo => {
          console.log(legajo);
         Swal.fire('Nuevo',`documento subido con éxito`, 'success');
          this.router.navigate([this.redirect]);
        }, err => {
          if(err.status === 400){
            this.error = err.error;
            console.log(this.error);
          }
        });
      }
    }

    public editar(): void {
      if(!this.docSelecionado){
        super.editar();
      }else{
        this.service.editarLegajo(this.model, this.docSelecionado).subscribe(legajo => {
          console.log(legajo);
         Swal.fire('Nuevo',`documento modificado con éxito`, 'success');
          this.router.navigate([this.redirect]);
        }, err => {
          if(err.status === 400){
            this.error = err.error;
            console.log(this.error);
          }
        });
      }
    }

  /*   
  ngOnInit(): void {
  } */

}
