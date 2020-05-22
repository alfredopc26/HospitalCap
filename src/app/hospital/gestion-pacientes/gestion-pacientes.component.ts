import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiHospitalService } from '../../../service/api-hospital.service';
import { Pacientes } from '../../../model/pacientes';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatDialog } from '@angular/material/dialog';


import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-gestion-pacientes',
  templateUrl: './gestion-pacientes.component.html',
  styleUrls: ['./gestion-pacientes.component.css']
})
export class GestionPacientesComponent implements OnInit {
  pacientes: Pacientes[];
  id: string;
  dataTable: any;

  constructor(
    private rutaActiva: ActivatedRoute,
    private hospitalService: ApiHospitalService,
    private chRef: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private dialogo: MatDialog
    ) {
      this.rutaActiva.params.subscribe(params => {
      console.log(params['idHospital']);
      this.id = params['idHospital'];
      });
    }

      ngOnInit(){
        this.obtenerPacientes(this.id);
      }

      eliminarPaciente(paciente: Pacientes) {
        this.dialogo
          .open(DialogoConfirmacionComponent, {
            data: `¿Realmente quieres eliminar a ${paciente.nombre}?`
          })
          .afterClosed()
          .subscribe((confirmado: Boolean) => {
            if (!confirmado) return;
            this.hospitalService
              .eliminarPaciente(paciente.id)
              .subscribe(() => {
                this.obtenerPacientes(this.id);
                this.snackBar.open('Paciente Eliminado', undefined, {
                  duration: 1500,
                });
              });
          })
      }
  
      obtenerPacientes(id){
  
        this.hospitalService.getPacientes(id).subscribe( ( data: Pacientes[] ) => {
          this.pacientes = data;
          console.log(data);
           this.chRef.detectChanges();

          const table: any = $('#table_pacientes');
          this.dataTable = table.DataTable();
      });
    }
}
