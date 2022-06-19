import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Size } from '../model/size';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SizeService {
  addSizeUrl: string;
  getSizeUrl: string;
  updateSizeUrl: string;
  deleteSizeUrl: string;
  constructor(private http: HttpClient) {
    this.addSizeUrl = 'https://localhost:44377/api/Size';
    this.getSizeUrl = 'https://localhost:44377/api/Size';
    this.updateSizeUrl = 'https://localhost:44377/api/Size';
    this.deleteSizeUrl = 'https://localhost:44377/api/Size';
  }
  addSize(emp: Size) {
    return this.http.post<Size>(this.addSizeUrl, emp).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getAllSize() {
    return this.http.get<Size>(this.getSizeUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateSize(emp: Size) {
    return this.http.put<Size>(this.updateSizeUrl, emp).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  deleteSize(emp: Size) {
    return this.http.delete<Size>(this.deleteSizeUrl + '/' + emp.ID);
  }
  getSizeById(id: number) {
    return this.http.get<Size>(this.getSizeUrl + '/GetSizeById/' + id);
  }
}
