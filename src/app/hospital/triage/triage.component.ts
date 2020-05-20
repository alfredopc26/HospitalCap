import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiHospitalService } from '../../../service/api-hospital.service';
import { Doctores } from '../../../model/doctores';

@Component({
  selector: 'app-triage',
  templateUrl: './triage.component.html',
  styleUrls: ['./triage.component.css']
})
export class TriageComponent implements OnInit {

  doctores: Doctores[];
  id: string;

  constructor(
    private rutaActiva: ActivatedRoute,
    private hospitalService: ApiHospitalService
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
    });
  }
  }
