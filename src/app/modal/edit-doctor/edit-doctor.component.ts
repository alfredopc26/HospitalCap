import { ApiHospitalService } from '../../../service/api-hospital.service';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Doctores } from '../../../model/doctores';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  doctor: Doctores;
  hospital: string;
  id: string;
  editForm: FormGroup;

  constructor(
    private hospitalService: ApiHospitalService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {

    this.id = window.localStorage.getItem("doctorId");
    this.hospital= window.localStorage.getItem("hospitalId");

    this.editForm = this.formBuilder.group({
      id: this.id,
      hospital: this.hospital,
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      tiposangre: ['', Validators.required],
      direccion: ['', Validators.required],
      experiencia: ['', Validators.required],
      nacimiento: ['', Validators.required],
     });

    this.hospitalService.getDoctor(this.id).subscribe( ( data: Doctores[] ) => {
      this.editForm.setValue(data);
      console.log(data);
    });
  }

  onSubmit(){
    if (this.editForm.valid) {
   
     let form = this.editForm.value;
     console.log(form);
     this.hospitalService.editarDoctor(this.editForm.value)
     .subscribe( data => {
       this.router.navigate(['/gestion_doctores/'+ this.hospital]);
     });

   }else{
     alert("Por favor llenar todos los campos.");
   }
   
   
   }
}
