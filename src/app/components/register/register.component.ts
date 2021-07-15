import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  titulo = "Registrar Docente"
  docente: Docente = new Docente();
  error: any;



  constructor(private service: DocenteService, private router: Router) { }

  ngOnInit(): void {
  }

  public crear(): void {
    this.service.crear(this.docente).subscribe(docente => {
      console.log(docente);
      alert(`Docente ${docente.nombre} creado con éxito`);
      this.router.navigate(['/login'])
    }, err => {
      if(err.status === 400){
        this.error = err.error;
        console.log(this.error)
      }
    })
  }

}
