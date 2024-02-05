import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalResponse, IUnit } from 'src/app/@shared/model/units/units.interface';
import { environment } from 'src/environments/environment';

const baseUrl = environment.url

@Injectable({
  providedIn: 'root'
})
export class AllUnitsService {

  constructor(private http:HttpClient) { }



  getAllUnits(){
    return this.http.get<GlobalResponse<IUnit[]>>(`${baseUrl}/units/allUnitsByOrder?page=0&size=10&orderBy=createdAt&ascDesc=0&requestStatus=0`)
  }

  getUnitById(id:string){
    return this.http.get<GlobalResponse<IUnit>>(`${baseUrl}/units/${id}`)
  }

  postMail(data:any){
    return this.http.post(`${baseUrl}/adminUsers/login`, data)
  }
}
