import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-create-patient',
  standalone: false,
  templateUrl: './create-patient.html',
  styleUrl: './create-patient.css',
})
export class CreatePatient {

  patient: Patient = new Patient();

  constructor(private patientService: PatientService, private router: Router) { }

  savePatient() {
    delete (this.patient as any).id;
    this.patientService.createPatient(this.patient).subscribe(data => {
      this.goToPatientList();
    });
  }

  goToPatientList() {
    this.router.navigate(['/doc-dash']);
  }

  onSubmit() {
    this.savePatient();
  }
}