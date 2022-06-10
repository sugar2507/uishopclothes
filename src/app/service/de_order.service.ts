import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart';
import { DeOrder } from '../model/de-order';

@Injectable({
  providedIn: 'root',
})
export class De_OrderService {
  objUrl: string;

  constructor(private http: HttpClient) {
    this.objUrl = 'https://localhost:44377/api/DeOrder';
  }
  addCartItem(deOrder: DeOrder) {
    return this.http.post<DeOrder>(this.objUrl, deOrder);
  }
}
