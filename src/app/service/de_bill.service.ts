import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart';

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
  
 
}