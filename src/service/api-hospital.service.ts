import { Hospital } from '../model/hospital';
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


  
  crearHospital(hospital:Hospital): Observable<ApiHospitalService>  {
    return this.http.post<ApiHospitalService>('http://localhost/webServices/controller.api.php?option=insertHospital', JSON.stringify(hospital));

  }
  crearDoctor(doctores:Doctores): Observable<ApiHospitalService>  {
    return this.http.post<ApiHospitalService>('http://localhost/webServices/controller.api.php?option=insertDoctor', JSON.stringify(doctores));

  }
  crearPaciente(pacientes:Pacientes): Observable<ApiHospitalService>  {
    return this.http.post<ApiHospitalService>('http://localhost/webServices/controller.api.php?option=insertPaciente', JSON.stringify(pacientes));

  }



  eliminarDoctor(id:string): Observable<ApiHospitalService>  {
    return this.http.get<ApiHospitalService>('http://localhost/webServices/controller.api.php?option=borrarDoctor&id='+id);

  }
}
