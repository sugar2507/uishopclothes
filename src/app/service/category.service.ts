import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { Categories } from '../model/category';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  addEmpUrl: string;
  getEmpUrl: string;
  updateEmpUrl: string;
  deleteEmpUrl:string;

  constructor(private http :HttpClient) {
    this.addEmpUrl = 'https://localhost:44377/api/Categories';
    this.getEmpUrl = 'https://localhost:44377/api/Categories';
    this.updateEmpUrl = 'https://localhost:44377/api/Categories';
    this.deleteEmpUrl = 'https://localhost:44377/api/Categories';
   }

   addCategory(emp : Categories){
     return this.http.post<Categories>(this.addEmpUrl,emp).pipe(map((res:any)=>{
      return res;
     }));
   }

     getAllCategory(){
      return this.http.get<Categories>(this.getEmpUrl).pipe(map((res:any)=>{
        return res;
       }));}
       updateCategory(emp: Categories){
        return this.http.put<Categories>(this.getEmpUrl, emp).pipe(map((res:any)=>{
          return res;
         }));}
    deleteCategory(emp: Categories){
      return this.http.delete<Categories>(this.deleteEmpUrl+'/'+emp.ID);
    }
}
