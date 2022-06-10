import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  objUrl: string;

  constructor(private http: HttpClient) {
    this.objUrl = 'https://localhost:44377/api/Order';
  }

  addOrder(Order: Order) {
    return this.http.post<Order>(this.objUrl, Order);
  }

  getOrder() {
    return this.http.get<Order>(this.objUrl);
  }
}
