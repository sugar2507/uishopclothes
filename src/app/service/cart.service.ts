import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any = [];
  productList = new BehaviorSubject<any>([]);
  // prodList:CartItem[]=[]
  /* . . . */
  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
    this.productList.next(this.items);
  }

  getProductData() {
    return this.productList.asObservable();
  }
  getTotalAmount() {
    let grandTotal = 0;
    this.items.map((a: any) => {
      grandTotal = a.totalItemNumber * a.totalItemPrice;
    });
  }
  // getTotalPrice() {
  //   let grandTotal = 0;
  //   this.items.map((a: any) => {
  //     grandTotal +=  (a.totalItemNumber*price);
  //   });
  // }
  RemoveItemCart(product: any) {
    this.items.map((a: any, index: any) => {
      if (product.ID == a.ID) {
        this.items.splice(index, 1);
        a.totalItemNumber -= 1;
      }
    });
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
  /* . . . */
}
