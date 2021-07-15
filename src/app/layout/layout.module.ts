import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { NabvarDocenteComponent } from './nabvar-docente/nabvar-docente.component';
import { NavbarCedComponent } from './navbar-ced/navbar.component';



@NgModule({
  declarations: [
    NavbarCedComponent,
    NabvarDocenteComponent,
  ],
  exports: [ NavbarCedComponent, NabvarDocenteComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
