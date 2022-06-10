import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Sex } from '../model/sex';

@Injectable({
  providedIn: 'root'
})
export class SexService {
  addSexUrl: string;
  getSexUrl: string;
  updateSexUrl: string;
  deleteSexUrl:string;
  constructor(private http :HttpClient) {
    this.addSexUrl = 'https://localhost:44377/api/Sex';
    this.getSexUrl = 'https://localhost:44377/api/Sex';
    this.updateSexUrl = 'https://localhost:44377/api/Sex';
    this.deleteSexUrl = 'https://localhost:44377/api/Sex';
   }
  addSex(emp : Sex){
    return this.http.post<Sex>(this.addSexUrl,emp).pipe(map((res:any)=>{
     return res;
    }));
  }

    getAllSex(){
     return this.http.get<Sex>(this.getSexUrl).pipe(map((res:any)=>{
       return res;
      }));}
      updateCompanies(emp: Sex){
       return this.http.put<Sex>(this.getSexUrl, emp).pipe(map((res:any)=>{
         return res;
        }));}
   deleteCompanies(emp: Sex){
     return this.http.delete<Sex>(this.deleteSexUrl+'/'+emp.ID);
   }
}
