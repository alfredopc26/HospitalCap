import { ActivatedRoute, Router } from '@angular/router';
import { ApiHospitalService } from '../../../service/api-hospital.service';
import { Doctores } from '../../../model/doctores';

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
    ) {
      this.rutaActiva.params.subscribe(params => {
      console.log(params['idHospital']);
      this.id = params['idHospital'];
      });

    }

    ngOnInit(){
      this.obtenerDoctores(this.id);
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

  deleteitem(doctor: string){

  
    if (confirm('Estas seguro que deseas borrar este item ?')) {

     console.log(doctor);
     this.hospitalService.eliminarDoctor(doctor)
     .subscribe( data => {
         this.ngOnInit();
     });

   }else{

   }
   
   
   }


}
