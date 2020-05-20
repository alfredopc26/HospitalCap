import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './hospital/menu/menu.component';
<<<<<<< HEAD
import { TriageComponent } from './hospital/triage/triage.component';
import { GestionDoctoresComponent } from './hospital/gestion-doctores/gestion-doctores.component';
import { GestionPacientesComponent } from './hospital/gestion-pacientes/gestion-pacientes.component';
<<<<<<< HEAD
import { NewHospitalComponent } from './modal/new-hospital/new-hospital.component';
=======
>>>>>>> parent of e87d84e... cambiosEmpresa0
=======
>>>>>>> parent of c2362c2... CambiosEmpresa1


const routes: Routes = [ 
  { path: '', component: DashboardComponent },
  { path: 'hospital/:idHospital', component: MenuComponent },
<<<<<<< HEAD
  { path: 'triage/:idHospital', component: TriageComponent },
  { path: 'gestion_doctores/:idHospital', component: GestionDoctoresComponent },
  { path: 'gestion_pacientes/:idHospital', component: GestionPacientesComponent },
=======
>>>>>>> parent of e87d84e... cambiosEmpresa0
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
