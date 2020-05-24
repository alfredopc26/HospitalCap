import { ApiHospitalService } from '../../../service/api-hospital.service';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Triage } from '../../../model/triage';
import { Doctores } from '../../../model/doctores';
import { Pacientes } from '../../../model/pacientes';


@Component({
  selector: 'app-edit-triage',
  templateUrl: './edit-triage.component.html',
  styleUrls: ['./edit-triage.component.css']
})
export class EditTriageComponent implements OnInit {

  triage: Triage;
  hospital: string;
  id: string;
  editForm: FormGroup;
  doctores: Doctores[];
  pacientes: Pacientes[];

  constructor(
    private hospitalService: ApiHospitalService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = window.localStorage.getItem('triageId');
    this.hospital = window.localStorage.getItem('hospitalId');

       // tslint:disable-next-line: align
   this.editForm = this.formBuilder.group({
      id: this.id,
      hospital: this.hospital,
      doctor: ['', Validators.required],
      paciente: ['', Validators.required],
      motivos: ['', Validators.required],
      diagnostico: ['', Validators.required],
      medicamentoR: [''],
      medicamentos: [''],
      dolor_garganta: [''],
      tos: [''],
      fiebre: [''],
      congestion: [''],
      fatiga: [''],
   });

    this.hospitalService.getTriage(this.id).subscribe( ( data: Triage[] ) => {
    this.editForm.setValue(data);
    console.log(data);
  });

    this.obtenerDoctores(this.hospital);
    this.obtenerPacientes(this.hospital);
  }

  onSubmit(){
    if (this.editForm.valid) {

     const form = this.editForm.value;
     console.log(form);
     this.hospitalService.editarTriage(this.editForm.value)
     .subscribe( data => {
       this.router.navigate(['/triage/' + this.hospital]);
     });

   }else{
     alert('Por favor llenar todos los campos.');
   }
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
}
