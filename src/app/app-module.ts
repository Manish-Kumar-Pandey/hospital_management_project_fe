import { NgModule, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Admindash } from './admindash/admindash';
import { provideHttpClient } from '@angular/common/http';
import { Appointment } from './appointmentdash/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home-page/home-page';
import { DocDash } from './doc-dash/doc-dash';
import { CreatePatient } from './create-patient/create-patient';

@NgModule({
  declarations: [
    App,
    Admindash,
    Appointment,
    CreateAppointment,
    HomePage,
    DocDash,
    CreatePatient
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
  ],
  bootstrap: [App]
})
export class AppModule { }
