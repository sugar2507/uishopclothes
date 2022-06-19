import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getAuth } from 'firebase/auth';

import { CartItem } from 'src/app/model/cart';
import { DeOrder } from 'src/app/model/de-order';
import { Order } from 'src/app/model/order';

import { CartService } from 'src/app/service/cart.service';
import { CheckoutService } from 'src/app/service/checkout.service';
import { De_OrderService } from 'src/app/service/de_order.service';
import { OrderService } from 'src/app/service/order.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {

  proForm!: FormGroup;
  totalItemNumber: number = 0;
  totalItemPrice: number = 0.0;
  products: any = [];
  ICart: CartItem[] = [];

  totalItemOriPrice: number = 0.0;
 
  
  order: Order = new Order();
  deorder: DeOrder = new DeOrder();
  idOrder: number = 0;
  listOrder: any = [];
  orderItem!: Order;
  ListDeOrder: any = [];
  orderForm!: FormGroup;
  constructor(private cartService: CartService, 
    private checkoutService: CheckoutService,
    private deOrderService: De_OrderService,

    private orderService: OrderService,
    private formBuilder: FormBuilder,

    ) {}

  ngOnInit(): void {
    this.getOrder();
   
    this.cartService.getProductData().subscribe((res) => {
      // this.products = res;
       this.ICart=res;
       console.log('cart-res', this.ICart);
 
       this.totalItemNumber = res.length;
 
       for (var i = 0; i < this.ICart.length; i++) {
          this.ICart[i].img=res[i].IMAGE;
          this.ICart[i].productName=res[i].NAME;
          this.ICart[i].price=res[i].PRICE;
          this.ICart[i].productId=res[i].ID;
           this.ICart[i].qty = 1;
           this.totalItemPrice += this.ICart[i].price;
       }
       console.log('cart', this.ICart);
     });
     this.getUser();
     this.proForm = this.formBuilder.group({
      id: [''],
      totalmoney: [''],
    });
  }
  email!: string;

  getUser() {
    if (getAuth()) {
      const auth = getAuth();
      console.log(auth.currentUser?.email);
      this.email = auth.currentUser?.email as string;
      return this.email;
    } else return (this.email = 'Anonymous');
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44377/Photos/${serverPath}`.replace(
      'localhost:4200/',
      ''
    );
  };
  //chua co xong - phai sua lai db
  saveCartItem() {
    for (var i = 0; i < this.ICart.length; i++) {
      (this.deorder.IDPRODUCT = this.ICart[i].productId),
        (this.deorder.IDORDER = this.order.ID),
        (this.deorder.PRICE = this.totalItemPrice),
        (this.deorder.QUANTITY = this.ICart[i].qty);
      this.deOrderService.addCartItem(this.deorder).subscribe(
        (res) => {
          console.log('deOrder', this.deorder);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  getOrder() {
    this.orderService.getOrder().subscribe(
      (res) => {
        this.listOrder = res;
        console.log('list order', res);

        this.orderItem = this.listOrder.pop();

        this.idOrder = this.orderItem.ID;
        console.log('ID order', this.idOrder);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  addCartItem() {
    console.log('ID order', this.idOrder);
    this.order.ORI_PRICE = this.totalItemOriPrice;
    this.order.TOTALMONEY = this.totalItemPrice;
    this.order.ID = this.idOrder + 1;
    this.order.NOTE = '';

    this.orderService.addOrder(this.order).subscribe(
      (res) => {
        // console.log(this.order.ID);
        this.saveCartItem();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
