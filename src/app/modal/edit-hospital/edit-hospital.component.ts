import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Hospital } from '../../../model/hospital';
import { ApiHospitalService } from '../../../service/api-hospital.service';

@Component({
  selector: 'app-edit-hospital',
  templateUrl: './edit-hospital.component.html',
  styleUrls: ['./edit-hospital.component.css']
})
export class EditHospitalComponent implements OnInit {

  hospital: Hospital;
  id: string;
  editForm: FormGroup;

  constructor(
    private hospitalService: ApiHospitalService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {

    this.id = window.localStorage.getItem("hospitalId");

    this.editForm = this.formBuilder.group({
      id: this.id,
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      nit: ['', Validators.required],
      representante: ['', Validators.required]
     });

    this.hospitalService.getHospital(this.id).subscribe( ( data: Hospital[] ) => {
      this.editForm.setValue(data);
      console.log(data);
    });

  }

  onSubmit(){
    if (this.editForm.valid) {
   
     let form = this.editForm.value;
     console.log(form);
     this.hospitalService.editarHospital(this.editForm.value)
     .subscribe( data => {
       this.router.navigate(['/hospital/'+ this.id]);
     });

   }else{
     alert("Por favor llenar todos los campos.");
   }
   
   
   }

}
