import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../model/products';
@Injectable({
  providedIn: 'root'
})
export class CartService {
    items: Products[] = [];
  /* . . . */
  constructor(
      private http:HttpClient
  ){}

    addToCart(product: Products) {
      this.items.push(product);
    }
  
    getItems() {
      return this.items;
    }
  
    clearCart() {
      this.items = [];
      return this.items;
    }
  /* . . . */
  }