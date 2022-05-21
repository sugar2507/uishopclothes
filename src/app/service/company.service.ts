import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Companies } from '../model/companies';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  addEmpUrl: string;
  getEmpUrl: string;
  updateEmpUrl: string;
  deleteEmpUrl:string;

  constructor(private http :HttpClient) {
    this.addEmpUrl = 'https://localhost:44377/api/Companies';
    this.getEmpUrl = 'https://localhost:44377/api/Companies';
    this.updateEmpUrl = 'https://localhost:44377/api/Companies';
    this.deleteEmpUrl = 'https://localhost:44377/api/Companies';
   }

   addCompanies(emp : Companies){
     return this.http.post<Companies>(this.addEmpUrl,emp).pipe(map((res:any)=>{
      return res;
     }));
   }

     getAllCompanies(){
      return this.http.get<Companies>(this.getEmpUrl).pipe(map((res:any)=>{
        return res;
       }));}
       updateCompanies(emp: Companies){
        return this.http.put<Companies>(this.getEmpUrl, emp).pipe(map((res:any)=>{
          return res;
         }));}
    deleteCompanies(emp: Companies){
      return this.http.delete<Companies>(this.deleteEmpUrl+'/'+emp.ID);
    }
}
