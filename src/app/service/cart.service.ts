import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../model/products';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any = [];
  productList = new BehaviorSubject<any>([]);

  /* . . . */
  constructor(
      private http:HttpClient
  ){}

  addToCart(product: Products) {
    this.items.push(product);
    this.productList.next(this.items);
  }

  getProductData() {
    return this.productList.asObservable();
  }
  getTotalAmount() {
    let grandTotal = 0;
    this.items.map((a: any) => {
      grandTotal += a.totalItemNumber;
    });
  }
  RemoveItemCart(product: any) {
    this.items.map((a: any, index: any) => {
      if (product.ID == a.ID) {
        this.items.splice(index, 1);
      }
    });
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  /* . . . */
  }
