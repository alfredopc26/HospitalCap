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

//  private url = "http://localhost/webServices/controller.api.php?";
 private url = "http://192.168.39.102/webServices/controller.api.php?";
 
  constructor( private http:HttpClient ) { }


  getHospitales(){
    return this.http.get<Hospital[]>(this.url+'option=getHospitales');
  }

  getHospital(id: Hospital){
    return this.http.get<Hospital[]>(this.url+'option=getHospital&hospital='+id);
  }
  getDoctor(id: string){
    return this.http.get<Doctores[]>(this.url+'option=getDoctores&hospital='+id);
  }
  getPacientes(id: string){
    return this.http.get<Pacientes[]>(this.url+'option=getPacientes&hospital='+id);
  }


  
  crearHospital(hospital:Hospital): Observable<ApiHospitalService>  {
    return this.http.post<ApiHospitalService>(this.url+'option=insertHospital', JSON.stringify(hospital));

  }
  crearDoctor(doctores:Doctores): Observable<ApiHospitalService>  {
    return this.http.post<ApiHospitalService>(this.url+'option=insertDoctor', JSON.stringify(doctores));

  }
  crearPaciente(pacientes:Pacientes): Observable<ApiHospitalService>  {
    return this.http.post<ApiHospitalService>(this.url+'option=insertPaciente', JSON.stringify(pacientes));

  }



  eliminarDoctor(id:string): Observable<ApiHospitalService>  {
    return this.http.get<ApiHospitalService>(this.url+'option=borrarDoctor&id='+id);

  }
  eliminarPaciente(id:string): Observable<ApiHospitalService>  {
    return this.http.get<ApiHospitalService>(this.url+'option=borrarPaciente&id='+id);

  }
}
