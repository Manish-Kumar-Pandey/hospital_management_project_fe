import { Component, ChangeDetectorRef } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-doc-dash',
  standalone: false,
  templateUrl: './doc-dash.html',
  styleUrl: './doc-dash.css',
})
export class DocDash {

  patients: Patient[] = [];
  loading = true;
  error = '';

  constructor(
    private patientService: PatientService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(){
    this.loading = true;
    this.error = '';
    this.patientService.getPatientList().subscribe({
      next: data => {
        console.log('API data:', data);
        this.patients = data;
        this.cdr.detectChanges();
        console.log('Patients after set:', this.patients);
        this.loading = false;
      },
      error: err => {
        console.error('API error:', err);
        this.error = 'Failed to load patients.';
        this.loading = false;
      }
    });
  }

}
