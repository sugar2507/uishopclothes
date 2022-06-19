import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartItem } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { Companies } from 'src/app/model/companies';
import { CartService } from 'src/app/service/cart.service';
import { De_OrderService } from 'src/app/service/de_order.service';
import { Order } from './../../../model/order';
import { OrderService } from 'src/app/service/order.service';
import { DeOrder } from 'src/app/model/de-order';
import { getAuth } from 'firebase/auth';
import { FirebaseService } from 'src/app/service/firebase.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalItemNumber: number = 0;
  totalItemPrice: number = 0.0;
  totalItemOriPrice: number = 0.0;
  products: any = [];
  ICart: CartItem[] = [];
  order: Order = new Order();
  deorder: DeOrder = new DeOrder();
  idOrder: number = 0;
  listOrder: any = [];
  orderItem!: Order;
  ListDeOrder: any = [];
  orderForm!: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private deOrderService: De_OrderService,
    private auth: FirebaseService,
    private orderService: OrderService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    // this.getOrder();
    this.cartService.getProductData().subscribe((res) => {
      this.products = res;
      this.ICart = res;
      this.ListDeOrder = res;

      this.totalItemNumber = res.length;

      for (var i = 0; i < this.ICart.length; i++) {
        this.ICart[i].img = res[i].IMAGE;
        this.ICart[i].productName = res[i].NAME;
        this.ICart[i].price = res[i].PRICE;
        this.ICart[i].ori_price = res[i].ORI_PRICE;
        this.ICart[i].productId = res[i].ID;
        this.ICart[i].qty = 1;
        this.totalItemOriPrice += this.ICart[i].ori_price;
        this.totalItemPrice += this.ICart[i].price;
      }
      console.log('price', this.totalItemPrice);
      console.log('cart', this.ICart);
    });
    this.getUser();
    // this.orderForm = this.formBuilder.group({
    //   ori_price: [''],
    //   total_money: [''],
    //   note: [''],
    // });
  }
  email!: string;
  logout() {
    this.auth.logout();
  }
  getUser() {
    if (getAuth()) {
      const auth = getAuth();
      console.log(auth.currentUser?.email);
      this.email = auth.currentUser?.email as string;
      return this.email;
    } else return (this.email = 'Anonymous');
  }
  //chua co xong - phai sua lai db
  // addCategory() {
  //   console.log(this.proForm);
  //   this.proObj.IDBILL = this.proForm.value.id;
  //   this.proObj.IDPRODUCT = this.proForm.value.name;

  //   this.cartService.addDeBill(this.proObj)
  // }

  removeProduct(item: any) {
    this.cartService.RemoveItemCart(item);
    this.totalItemNumber -= 1;
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:44377/Photos/${serverPath}`.replace(
      'localhost:4200/',
      ''
    );
  };
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
