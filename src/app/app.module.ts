import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';




import { NewHospitalComponent } from './modal/new-hospital/new-hospital.component';
import { TriageComponent } from './hospital/triage/triage.component';
import { MenuComponent } from './hospital/menu/menu.component';
import { GestionDoctoresComponent } from './hospital/gestion-doctores/gestion-doctores.component';
import { GestionPacientesComponent } from './hospital/gestion-pacientes/gestion-pacientes.component';
import { NewDoctorComponent } from './modal/new-doctor/new-doctor.component';
import { NewPacienteComponent } from './modal/new-paciente/new-paciente.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewHospitalComponent,
    TriageComponent,
    MenuComponent,
    GestionDoctoresComponent,
    GestionPacientesComponent,
    NewDoctorComponent,
    NewPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatGridListModule,
    MatRadioModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
