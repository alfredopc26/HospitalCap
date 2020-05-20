import { ApiHospitalService } from '../../../service/api-hospital.service';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrls: ['./new-hospital.component.css']
})
export class NewHospitalComponent implements OnInit {

  addForm: FormGroup;
 constructor(
   private hospitalService: ApiHospitalService,
   private formBuilder: FormBuilder,
   private router: Router
   ) { }

 ngOnInit(): void {
  this.addForm = this.formBuilder.group({
    id: [],
    nombre: ['', Validators.required],
    direccion: ['', Validators.required],
    telefono: ['', Validators.required],
    nit: ['', Validators.required],
    representante: ['', Validators.required]
   });
}


onSubmit(){

  let form = this.addForm.value;
  console.log(form);
  this.hospitalService.crearHospital(this.addForm.value)
  .subscribe( data => {
    this.router.navigate(['']);
  });
}

}
