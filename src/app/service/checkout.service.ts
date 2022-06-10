import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart';


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


    }
