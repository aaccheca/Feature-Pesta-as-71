import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
/*import { DatosGeneralesComponent } from './pages/datos-generales/datos-generales.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';
import { IntegrantesComponent } from './pages/integrantes/integrantes.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { PlanDeTrabajoComponent } from './pages/plan-de-trabajo/plan-de-trabajo.component';
import { FirmasComponent } from './pages/firmas/firmas.component';
import { BibliografiaComponent } from './pages/bibliografia/bibliografia.component';
import { AnexosComponent } from './pages/anexos/anexos.component';
import { ObservacionesComponent } from './pages/observaciones/observaciones.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';*/

@NgModule({
  declarations: [
    AppComponent,
    /*DatosGeneralesComponent,
    EmpresaComponent,
    IntegrantesComponent,
    ActividadesComponent,
    PlanDeTrabajoComponent,
    FirmasComponent,
    BibliografiaComponent,
    AnexosComponent,
    ObservacionesComponent,
    DocumentosComponent,
    CertificadosComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  /*exports: [
    MatFormFieldModule,
  ],*/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
