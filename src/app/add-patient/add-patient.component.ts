import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
patient : Patient= {id:0,nom:'',prenom:'',age:0}
  constructor(private patients:PatientService) { }

  ngOnInit(): void {
    
  }
  addPatientController(){
    this.patients.addPatientService(this.patient)
  }

}
