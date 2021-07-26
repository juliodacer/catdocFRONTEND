import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Docente } from 'src/app/models/docente';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo: "Iniciar Sesión";
  docente= new Docente();


  constructor( 
    private docenteService: DocenteService,
    private toastr: ToastrService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.docenteService.loginDocente(this.docente).subscribe(
      data => {
        this.toastr.success('Usuario Verificado', 'OK', {
          timeOut: 3000
        });
        this.router.navigate(['/lista-docente']);
      }, err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000
        });
        this.router.navigate(['/']);
      }
    );
    
  }

}
