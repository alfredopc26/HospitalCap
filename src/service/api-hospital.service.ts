import { Hospital } from '../model/hospital';
import { Newhospital } from '../model/newhospital';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiHospitalService {

  constructor( private http:HttpClient ) { }

  getHospital(){
    return this.http.get<Hospital[]>('http://localhost/webServices/controller.api.php?option=getHospitales');
  }

  createHospital(newHospital: Newhospital){
    return this.http.post('http://localhost/webServices/controller.api.php?option=insertHospital', newHospital );
  }
}
