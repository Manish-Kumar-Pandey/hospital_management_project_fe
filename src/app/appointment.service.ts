import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppointmentModel } from './appointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private httpClient: HttpClient){}

  private baseUrl = "http://localhost:8080/api/v2";

  getAppointmentList():Observable<AppointmentModel[]>{
    return this.httpClient.get<AppointmentModel[]>(`${this.baseUrl}`);
  }

  createAppointment(appointment: AppointmentModel): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/insert`, appointment);
  }

  deleteAppointment(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/appointment/${id}`);
  }
}
