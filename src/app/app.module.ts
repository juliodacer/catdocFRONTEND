import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

/* import { ListaDocenteComponent } from './components/docente/lista-docente/lista-docente.component';
import { ListaDocumentoComponent } from './components/documento/lista-documento/lista-documento.component';
import { DetalleDocenteComponent } from './components/docente/detalle-docente/detalle-docente.component';
import { RegistrarDocenteComponent } from './components/docente/registrar-docente/registrar-docente.component';
import { EditarDocenteComponent } from './components/docente/editar-docente/editar-docente.component';
import { LoginComponent } from './components/login/login.component'; */
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
