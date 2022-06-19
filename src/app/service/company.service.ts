import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Company } from '../model/company';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  addEmpUrl: string;
  getEmpUrl: string;
  updateEmpUrl: string;
  deleteEmpUrl: string;

  constructor(private http: HttpClient) {
    this.addEmpUrl = 'https://localhost:44377/api/Company';
    this.getEmpUrl = 'https://localhost:44377/api/Company';
    this.updateEmpUrl = 'https://localhost:44377/api/Company';
    this.deleteEmpUrl = 'https://localhost:44377/api/Company';
  }

  addCompanies(emp: Company) {
    return this.http.post<Company>(this.addEmpUrl, emp).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAllCompanies() {
    return this.http.get<Company>(this.getEmpUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateCompanies(emp: Company) {
    return this.http.put<Company>(this.getEmpUrl, emp).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  deleteCompanies(emp: Company) {
    return this.http.delete<Company>(this.deleteEmpUrl + '/' + emp.ID);
  }
}
