import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocentesComponent } from './components/docentes/docentes.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { LegajoComponent } from './components/legajo/legajo.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'evaluacion'},
  {path: 'docentes', component: DocentesComponent},
  {path: 'legajo', component: LegajoComponent},
  {path: 'evaluacion', component: EvaluacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
