import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './hospital/menu/menu.component';
import { TriageComponent } from './hospital/triage/triage.component';
import { GestionDoctoresComponent } from './hospital/gestion-doctores/gestion-doctores.component';
import { GestionPacientesComponent } from './hospital/gestion-pacientes/gestion-pacientes.component';
import { NewDoctorComponent } from './modal/new-doctor/new-doctor.component';
import { NewPacienteComponent } from './modal/new-paciente/new-paciente.component';
import { NewTriageComponent} from './modal/new-triage/new-triage.component';

const routes: Routes = [ 
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hospital/:idHospital', component: MenuComponent },
  { path: 'triage/:idHospital', component: TriageComponent },
  { path: 'gestion_doctores/:idHospital', component: GestionDoctoresComponent },
  { path: 'crear_doctor/:idHospital', component: NewDoctorComponent },
  { path: 'crear_paciente/:idHospital', component: NewPacienteComponent },
  { path: 'crear_triage/:idHospital', component: NewTriageComponent },
  { path: 'gestion_pacientes/:idHospital', component: GestionPacientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }