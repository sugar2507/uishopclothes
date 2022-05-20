import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employee } from '../model/employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  EmpUrl: string;


  constructor(private http: HttpClient) {
    this.EmpUrl = 'https://localhost:44377/api/Categories';

  }

  addEmployee(emp: Employee) {
    return this.http.post<Employee>(this.EmpUrl, emp).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAllEmployee() {
    return this.http.get<Employee>(this.EmpUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateEmployee(emp: Employee) {
    return this.http.put<Employee>(this.EmpUrl, emp).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  deleteEmployee(emp: Employee) {
    return this.http.delete<Employee>(this.EmpUrl + '/' + emp.ID);
  }
}
