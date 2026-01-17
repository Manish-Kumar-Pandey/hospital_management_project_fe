import { Component, ChangeDetectorRef } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { AppointmentModel } from '../appointment.model';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.html',
  styleUrls: ['./appointment.css'],
})
export class Appointment {
  appointments: AppointmentModel[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private cdr: ChangeDetectorRef
  ) {
    console.log('Appointment instance', Math.random());
  }

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments() {
    this.appointmentService.getAppointmentList().subscribe(data => {
      console.log('Data received in component:', data);
      this.appointments = data;
      this.cdr.detectChanges();
      console.log('Appointments after set:', this.appointments);
    })
  }
}
