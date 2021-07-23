import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ListaDocenteComponent } from './docente/lista-docente/lista-docente.component';
import { DetalleDocenteComponent } from './docente/detalle-docente/detalle-docente.component';
import { RegistrarDocenteComponent } from './docente/registrar-docente/registrar-docente.component';
import { EditarDocenteComponent } from './docente/editar-docente/editar-docente.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    ListaDocenteComponent,
    DetalleDocenteComponent,
    RegistrarDocenteComponent,
    EditarDocenteComponent,
    LoginComponent
  ],
  exports: [NavbarComponent,
    ListaDocenteComponent],

  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
