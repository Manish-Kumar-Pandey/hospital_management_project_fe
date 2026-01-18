import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl = "http://localhost:8080/api/v1";

  getPatientList(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  createPatient(patient: Patient): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/insert`, patient);
  }

  deletePatient(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/patient/${id}`);
  }

}
