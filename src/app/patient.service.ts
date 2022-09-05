import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from './patient';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PatientService {
url=environment.baseUrl
  constructor(private httpClient:HttpClient) {
   }
   
  
   getPatients():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.url}/patient`)
   }
   deletePatient(id:number):Observable<Patient>{
    return this.httpClient.delete<Patient>(`${this.url}/patient/${id}`)
   }
   addPatientService(patient:Patient):Observable<any>{
    console.log(`${this.url}/patient`);
    console.log(patient);
    
    return this.httpClient.post<any>(`${this.url}/patient`,patient,httpOptions)
   }
}

