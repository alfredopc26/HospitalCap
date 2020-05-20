import { Hospital } from '../model/hospital';
import { Newhospital } from '../model/newhospital';
import { Doctores } from '../model/doctores';
import { Pacientes } from '../model/pacientes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiHospitalService {

  constructor( private http:HttpClient ) { }

  getHospitales(){
    return this.http.get<Hospital[]>('http://localhost/webServices/controller.api.php?option=getHospitales');
  }

  getHospital(id: Hospital){
    return this.http.get<Hospital[]>('http://localhost/webServices/controller.api.php?option=getHospital&hospital='+id);
  }
  getDoctor(id: string){
    return this.http.get<Doctores[]>('http://localhost/webServices/controller.api.php?option=getDoctores&hospital='+id);
  }
  getPacientes(id: string){
    return this.http.get<Pacientes[]>('http://localhost/webServices/controller.api.php?option=getPacientes&hospital='+id);
  }

<<<<<<< HEAD
  crearHospital(hospital:Hospital): Observable<ApiHospitalService>  {
    return this.http.post<ApiHospitalService>('http://localhost/webServices/controller.api.php?option=insertHospital', JSON.stringify(hospital));
=======
  createHospital(newHospital: Newhospital){
    return this.http.post('http://192.168.39.102/webServices/controller.api.php?option=insertHospital', newHospital );
>>>>>>> parent of 8abf03b... 18Ms
  }
}
