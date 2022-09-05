import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import{ HttpClientModule}from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddPatientComponent } from './add-patient/add-patient.component';
@NgModule({
  declarations: [
    AppComponent,
    ListePatientComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
