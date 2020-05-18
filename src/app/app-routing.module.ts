import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './hospital/menu/menu.component';
import { TriageComponent } from './hospital/triage/triage.component';
import { GestionDoctoresComponent } from './hospital/gestion-doctores/gestion-doctores.component';


const routes: Routes = [ 
  { path: '', component: DashboardComponent },
  { path: 'hospital/:idHospital', component: MenuComponent },
  { path: 'triage/:idHospital', component: TriageComponent },
  { path: 'gestion_doctores/:idHospital', component: GestionDoctoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
