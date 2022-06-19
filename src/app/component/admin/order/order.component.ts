import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  constructor(private orderService: OrderService) {}
  orderList: any;
  ngOnInit(): void {
    this.getAllOrder();
  }
  getAllOrder() {
    this.orderService.getOrder().subscribe(
      (res) => {
        this.orderList = res;
        console.log(this.orderList);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
}
