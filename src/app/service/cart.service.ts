import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../model/products';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart';
import { De_Bill } from '../model/de_bill';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any = [];
  addDBillUrl: string;
  productList = new BehaviorSubject<any>([]);
  // prodList:CartItem[]=[]
  /* . . . */
  constructor(private http: HttpClient) {
    this.addDBillUrl = 'https://localhost:44377/api/De_bills';
  }

  addDeBill(Pro: De_Bill) {
    return this.http.post<De_Bill>(this.addDBillUrl, Pro);
  }
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
}
