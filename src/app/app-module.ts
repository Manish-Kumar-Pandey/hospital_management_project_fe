import { NgModule, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Admindash } from './admindash/admindash';
import { provideHttpClient } from '@angular/common/http';
import { Appointment } from './appointmentdash/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Admindash,
    Appointment,
    CreateAppointment
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
