import { ActivatedRoute, Router } from '@angular/router';
import { ApiHospitalService } from '../../../service/api-hospital.service';
import { Doctores } from '../../../model/doctores';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatDialog } from '@angular/material/dialog';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

import { Component, OnInit, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-gestion-doctores',
  templateUrl: './gestion-doctores.component.html',
  styleUrls: ['./gestion-doctores.component.css']
})
export class GestionDoctoresComponent implements OnInit{


  doctores: Doctores[];
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
      this.obtenerDoctores(this.id);
    }

  eliminarDoctor(doctor: Doctores) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar al doctor ${doctor.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.hospitalService
          .eliminarDoctor(doctor.id)
          .subscribe(() => {
            this.obtenerDoctores(this.id);
            this.snackBar.open('Doctor Eliminado', undefined, {
              duration: 1500,
            });
          });
      });
  }

  obtenerDoctores(id){

    this.hospitalService.getDoctor(id).subscribe( ( data: Doctores[] ) => {
      this.doctores = data;
      console.log(data);

      this.chRef.detectChanges();
      const table: any = $('#table_doctores');
      this.dataTable = table.DataTable();
  });
}

}
