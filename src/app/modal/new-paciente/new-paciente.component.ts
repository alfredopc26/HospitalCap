import { ApiHospitalService } from '../../../service/api-hospital.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-new-paciente',
  templateUrl: './new-paciente.component.html',
  styleUrls: ['./new-paciente.component.css']
})
export class NewPacienteComponent implements OnInit {

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
      identificacion: ['', Validators.required],
      hospital: this.id,
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      eps: ['', Validators.required],
      acompaniante: ['', Validators.required],
      antecedentes: ['', Validators.required],
     });
  }


  onSubmit(){
    if (this.addForm.valid) {
      
     let form = this.addForm.value;
     console.log(form);
     this.hospitalService.crearPaciente(this.addForm.value)
     .subscribe( data => {

       this.router.navigate(['/gestion_pacientes/' + this.id]);
     });

   }else{
     alert('Por favor llenar todos los campos.');
   }
   }
}
