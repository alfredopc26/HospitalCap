import { ApiHospitalService } from './../../service/api-hospital.service';
import { Hospital } from '../../model/hospital';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hospitales: Hospital[];

  constructor( private hospitalService: ApiHospitalService ) { }

  ngOnInit(){
    this.listarHospitales();
  }

  listarHospitales(){
        this.hospitalService.getHospitales().subscribe(( data: Hospital[] ) => {
          
          this.hospitales = data;
          console.log(this.hospitales);

      });
    }
  
  }
