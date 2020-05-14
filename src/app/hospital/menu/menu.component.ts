import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiHospitalService } from '../../../service/api-hospital.service';
import { Hospital } from '../../../model/hospital';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hospital: Hospital[];
  hospitalPar: string;

  constructor(
    private rutaActiva: ActivatedRoute,
    private hospitalService: ApiHospitalService
   ) {
     
    this.rutaActiva.params.subscribe(params=>{
      console.log(params['idHospital']);
      this.hospitalPar=params['idHospital'];

      this.hospitalService.getHospital(this.hospitalPar).subscribe(( data: Hospital[] ) => {
      
        this.hospital = data;

        console.log(this.hospital);

    });

    })     
    
  
   }

  ngOnInit(): void {
  }

}
