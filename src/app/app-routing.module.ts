import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';

const routes: Routes = [
  {path:'',component:ListePatientComponent},
  {path:'add',component:AddPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
