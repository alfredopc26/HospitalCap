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

  hosp: any;
  id: string;

  constructor(
    private rutaActiva: ActivatedRoute,
    private hospitalService: ApiHospitalService
   ) {
    this.rutaActiva.params.subscribe(params => {
      console.log(params['idHospital']);
        this.id=params['idHospital'];
      });
}

   ngOnInit(){
    this.obtenerHospital(this.id);
  }


  obtenerHospital(id){

    this.hospitalService.getHospital(id).subscribe( ( data: Hospital[] ) => {
      this.hosp = data;
      console.log(data);
  });
}
}
