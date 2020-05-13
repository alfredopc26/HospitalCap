import { ApiHospitalService } from '../../../service/api-hospital.service';
import { Hospital } from '../../../model/hospital';
import { Newhospital } from '../../../model/newhospital';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-hospital',
  templateUrl: './new-hospital.component.html',
  styleUrls: ['./new-hospital.component.css']
})
export class NewHospitalComponent implements OnInit {

 constructor(private hospitalService: ApiHospitalService, private snackBar: MatSnackBar) { }

 hospitales: Hospital[];
 
  ngOnInit(): void {
  }

  hospitalModel = new Newhospital("", "", "", "", "")

  onSubmit() {
    this.hospitalService.createHospital(this.hospitalModel).subscribe(() => {
      this.snackBar.open('Hospital guardada', undefined, {
        duration: 1500,
      });
    })
  }

}
