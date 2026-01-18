import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Admindash } from './admindash/admindash';
import { Appointment } from './appointmentdash/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { HomePage } from './home-page/home-page';
import { DocDash } from './doc-dash/doc-dash';
import { CreatePatient } from './create-patient/create-patient';
import { MedicineList } from './medicine-list/medicine-list';
import { CreateMedicine } from './create-medicine/create-medicine';

const routes: Routes = [
  {path: "admin", component: Admindash},
  {path: "appointmentlist", component: Appointment },
  {path: "create-appointment", component: CreateAppointment},
  {path: "home", component: HomePage},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "doc-dash", component: DocDash},
  {path:"create-patient", component: CreatePatient},
  {path:"medicine-list", component: MedicineList},
  {path: "add-medicine", component: CreateMedicine}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
