import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends CommonFormComponent<Docente, DocenteService> implements OnInit {

  constructor(service: DocenteService, 
              router: Router,
              route: ActivatedRoute) {
                
                super(service, router, route);
                this.titulo = 'Crear Docentes';
                this.model = new Docente();
                this.redirect = '/docentes';
                this.nombreModal = Docente.name;
               }
}
