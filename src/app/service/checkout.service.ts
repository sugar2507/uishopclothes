import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../model/products';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart';
import { De_Bill } from '../model/de_bill';
import { Bills } from '../model/bill';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  items: any = [];
  addBillUrl: string;
  productList = new BehaviorSubject<any>([]);
  // prodList:CartItem[]=[]
  /* . . . */
  constructor(
      private http:HttpClient
  ){
    this.addBillUrl = 'https://localhost:44377/api/Bills';
  }

  addBill(Pro: Bills) {
    return this.http.post<Bills>(this.addBillUrl, Pro)
  }
    }
