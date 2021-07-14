import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocentesComponent } from './components/docentes/docentes.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { LegajoComponent } from './components/legajo/legajo.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DocEspComponent } from './screens/documents/doc-esp/doc-esp.component';
import { DocGenComponent } from './screens/documents/doc-gen/doc-gen.component';
import { InscriptionComponent } from './screens/inscription/inscription.component';
import { WelcomeComponent } from './screens/welcome/welcome.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'docentes', component: DocentesComponent},
  {path: 'legajo', component: LegajoComponent},
  {path: 'evaluacion', component: EvaluacionComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'docEspecificos', component: DocEspComponent},
  {path: 'docGenerales', component: DocGenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
