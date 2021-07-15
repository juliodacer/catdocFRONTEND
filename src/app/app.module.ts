import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LegajoComponent } from './components/legajo/legajo.component';
import { EvaluacionComponent } from './components/evaluacion/evaluacion.component';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InscriptionComponent } from './screens/screenDocente/inscription/inscription.component';
import { WelcomeComponent } from './screens/screenDocente/welcome/welcome.component';
import { DocEspComponent } from './screens/screenDocente/documents/doc-esp/doc-esp.component';
import { DocGenComponent } from './screens/screenDocente/documents/doc-gen/doc-gen.component';
import { DocentesComponent } from './screens/screenCED/docentes/docentes.component';
import { FormsModule } from '@angular/forms';

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
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
