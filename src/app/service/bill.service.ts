import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart';
import { De_Bill } from '../model/de_bill';
import { Bills } from '../model/bill';
@Injectable({
  providedIn: 'root'
})
export class BillService {
    addProUrl: string;
    getProUrl: string;
    updateProUrl: string;
    deleteProUrl: string;
  
    constructor(private http: HttpClient) {
      this.addProUrl = 'https://localhost:44377/api/Bills';
      this.getProUrl = 'https://localhost:44377/api/Bills';
      this.updateProUrl = 'https://localhost:44377/api/Bills';
      this.deleteProUrl = 'https://localhost:44377/api/Bills';
    }
  
    addCategory(Pro: Bills) {
      return this.http.post<Bills>(this.addProUrl, Pro)
    }
}