import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {

  constructor(private httpClient: HttpClient) {}

  private baseUrl = "http://localhost:8080/api/v3";

  getMedicineList():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }

  createMedicine(medicine: Medicine): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/insert`, medicine);
  }

}
