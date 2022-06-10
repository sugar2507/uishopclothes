import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart';
import { De_Bill } from '../model/de_bill';
@Injectable({
  providedIn: 'root'
})
export class De_BillService {
    addProUrl: string;
    getProUrl: string;
    updateProUrl: string;
    deleteProUrl: string;
  
    constructor(private http: HttpClient) {
      this.addProUrl = 'https://localhost:44377/api/De_bills';
      this.getProUrl = 'https://localhost:44377/api/De_bills';
      this.updateProUrl = 'https://localhost:44377/api/De_bills';
      this.deleteProUrl = 'https://localhost:44377/api/De_bills';
    }
  
    addCategory(Pro: De_Bill) {
      return this.http.post<De_Bill>(this.addProUrl, Pro)
    }
}