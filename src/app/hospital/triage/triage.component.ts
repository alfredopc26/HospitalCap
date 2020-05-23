import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiHospitalService } from '../../../service/api-hospital.service';
import { Triage } from '../../../model/triage';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogoConfirmacionComponent } from "../../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatDialog } from '@angular/material/dialog';

import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';

@Component({
  selector: 'app-triage',
  templateUrl: './triage.component.html',
  styleUrls: ['./triage.component.css']
})
export class TriageComponent implements OnInit {

  triages: Triage[];
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
      this.obtenerTriage(this.id);
    }

    eliminarTriage(triages: Triage) {
      this.dialogo
        .open(DialogoConfirmacionComponent, {
          data: `¿Realmente quieres eliminar el registro ${triages.id}?`
        })
        .afterClosed()
        .subscribe((confirmado: Boolean) => {
          if (!confirmado) return;
          this.hospitalService
            .eliminarTriage(triages.id)
            .subscribe(() => {
              this.obtenerTriage(this.id);
              this.snackBar.open('Registro Eliminado', undefined, {
                duration: 1500,
              });
            });
        });
    }

    obtenerTriage(id){

      this.hospitalService.getTriage(id).subscribe( ( data: Triage[] ) => {
        this.triages = data;
        console.log(data);
        this.chRef.detectChanges();
        const table: any = $('#table_triage');
        this.dataTable = table.DataTable();
    });
  }

  }