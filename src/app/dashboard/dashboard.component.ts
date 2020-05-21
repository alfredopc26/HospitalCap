import { ApiHospitalService } from './../../service/api-hospital.service';
import { Hospital } from '../../model/hospital';
import {MatDialog} from '@angular/material/dialog';
import { NewHospitalComponent } from '../modal/new-hospital/new-hospital.component';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  hospitales: Hospital[];

  constructor( 
    private hospitalService: ApiHospitalService,
    public dialog: MatDialog,
     ) { }


  ngOnInit(){
    this.listarHospitales();
  }

  listarHospitales(){
        this.hospitalService.getHospitales().subscribe(( data: Hospital[] ) => {
          
          this.hospitales = data;
          console.log(this.hospitales);

      });
    }

   openDialog() {
      const dialogRef = this.dialog.open(NewHospitalComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }


    
  
  }
