import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart';
import { DeOrder } from './../model/de-order';
import { Order } from '../model/order';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any = [];

  productList = new BehaviorSubject<any>([]);
  ProdUrl: string;
  // prodList:CartItem[]=[]
  /* . . . */
  constructor(private http: HttpClient) {
    this.ProdUrl = 'https://localhost:44377/api/Products';
  }
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
  addDeOrder(deOrder: DeOrder) {
    return this.http.post<DeOrder>(this.ProdUrl, deOrder);
  }
  addOrder(order: Order) {
    return this.http.post<Order>(this.ProdUrl, order);
  }
}
