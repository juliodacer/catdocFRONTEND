import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleDocenteComponent } from './components/docente/detalle-docente/detalle-docente.component';
import { EditarDocenteComponent } from './components/docente/editar-docente/editar-docente.component';
import { ListaDocenteComponent } from './components/docente/lista-docente/lista-docente.component';
import { RegistrarDocenteComponent } from './components/docente/registrar-docente/registrar-docente.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component: LoginComponent},
  {path: 'lista-docente', component: ListaDocenteComponent},
  {path: 'detalle-docente/:id', component: DetalleDocenteComponent},
  {path: 'registrar-docente', component: RegistrarDocenteComponent},
  {path: 'editar-docente/:id', component: EditarDocenteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
