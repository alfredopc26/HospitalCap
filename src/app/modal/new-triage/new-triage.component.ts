import { Component, OnInit } from '@angular/core';
import { ApiHospitalService } from '../../../service/api-hospital.service';
import { Doctores } from '../../../model/doctores';
import { Pacientes } from '../../../model/pacientes';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-triage',
  templateUrl: './new-triage.component.html',
  styleUrls: ['./new-triage.component.css']
})
export class NewTriageComponent implements OnInit {
  addForm: FormGroup;
  doctores: Doctores[];
  pacientes: Pacientes[];
  id: string;

  constructor(
    private rutaActiva: ActivatedRoute,
    private hospitalService: ApiHospitalService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.rutaActiva.params.subscribe(params => {
      console.log(params['idHospital']);
      this.id = params['idHospital'];
      });
  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      hospital:this.id,
      doctor: ['', Validators.required],
      paciente: ['', Validators.required],
      motivo: ['', Validators.required],
      diagnostico: ['', Validators.required],
      medicamentor: [''],
      medicinas: [''],
      dolor_garganta: [''],
      tos:[''],
      fiebre: [''],
      congestion: [''],
      fatiga: [''],
     });

     this.obtenerDoctores(this.id);
     this.obtenerPacientes(this.id);
  }

  obtenerDoctores(id){

    this.hospitalService.getDoctores(id).subscribe( ( data: Doctores[] ) => {
      this.doctores = data;
      console.log(data);
  });
}

obtenerPacientes(id){

  this.hospitalService.getPacientes(id).subscribe( ( data: Pacientes[] ) => {
    this.pacientes = data;
    console.log(data);
});
}

  onSubmit(){
    if (this.addForm.valid) {
      
     let form = this.addForm.value;
     console.log(form);
     this.hospitalService.crearTriage(this.addForm.value)
     .subscribe( data => {

       this.router.navigate(['/triage/' + this.id]);
     });

   }else{
     alert('Por favor llenar todos los campos.');
   }
   }

}
