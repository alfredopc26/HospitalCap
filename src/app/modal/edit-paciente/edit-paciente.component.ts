import { ApiHospitalService } from '../../../service/api-hospital.service';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Pacientes } from '../../../model/pacientes';

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit {

  paciente: Pacientes;
  hospital: string;
  id: string;
  editForm: FormGroup;
  constructor(
    private hospitalService: ApiHospitalService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.id = window.localStorage.getItem("pacienteId");
    this.hospital = window.localStorage.getItem("hospitalId");

   // tslint:disable-next-line: align
   this.editForm = this.formBuilder.group({
      id: this.id,
      hospital: this.hospital,
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      eps: ['', Validators.required],
      acompaniante: ['', Validators.required],
      antecedentes: ['', Validators.required],
     });

    this.hospitalService.getPaciente(this.id).subscribe( ( data: Pacientes[] ) => {
      this.editForm.setValue(data);
      console.log(data);
    });
  }

  onSubmit(){
    if (this.editForm.valid) {
   
     let form = this.editForm.value;
     console.log(form);
     this.hospitalService.editarPaciente(this.editForm.value)
     .subscribe( data => {
       this.router.navigate(['/gestion_pacientes/' + this.hospital]);
     });

   }else{
     alert("Por favor llenar todos los campos.");
   }
   }

}
