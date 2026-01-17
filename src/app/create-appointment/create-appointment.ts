import { Component } from '@angular/core';
import { AppointmentModel } from '../appointment.model';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  templateUrl: './create-appointment.html',
  styleUrl: './create-appointment.css',
})
export class CreateAppointment {

  appointment: AppointmentModel = new AppointmentModel();

  constructor(private appointmentService: AppointmentService, private router: Router){}

  saveAppointment(){
    delete (this.appointment as any).id;
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
      this.goToAppointmentsList();
    });
  }

  onSubmit(){
    this.saveAppointment();
  }

  goToAppointmentsList(){
    this.router.navigate(['/appointmentlist']);
  }

}
