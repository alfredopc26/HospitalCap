import { ApiHospitalService } from '../../../service/api-hospital.service';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.css']
})
export class NewDoctorComponent implements OnInit {
  
  addForm: FormGroup;
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
      id: this.id,
      nombre: ['', Validators.required],      
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      tipo_sangre: ['', Validators.required],
      experiencia: ['', Validators.required],
      nacimiento: ['', Validators.required],
     });
  }

  onSubmit(){
    if (this.addForm.valid) {
   
     let form = this.addForm.value;
     console.log(form);
     this.hospitalService.crearDoctor(this.addForm.value)
     .subscribe( data => {

       this.router.navigate(['/gestion_doctores/'+data['id']]);
     });

   }else{
     alert("Por favor llenar todos los campos.");
   }
   
   
   }

}
