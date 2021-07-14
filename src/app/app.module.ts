import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { LegajoComponent } from './components/legajo/legajo.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InscriptionComponent } from './screens/inscription/inscription.component';
import { WelcomeComponent } from './screens/welcome/welcome.component';
import { DocEspComponent } from './screens/documents/doc-esp/doc-esp.component';
import { DocGenComponent } from './screens/documents/doc-gen/doc-gen.component';

@NgModule({
  declarations: [
    AppComponent,
    DocentesComponent,
    LegajoComponent,
    EvaluacionComponent,
    LoginComponent,
    RegisterComponent,
    InscriptionComponent,
    WelcomeComponent,
    DocEspComponent,
    DocGenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
