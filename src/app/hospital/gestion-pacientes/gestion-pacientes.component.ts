import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiHospitalService } from '../../../service/api-hospital.service';
import { Pacientes } from '../../../model/pacientes';
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
    private chRef: ChangeDetectorRef
    ) {
      this.rutaActiva.params.subscribe(params => {
      console.log(params['idHospital']);
      this.id = params['idHospital'];
      });
    }

      ngOnInit(){
        this.obtenerPacientes(this.id);
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
