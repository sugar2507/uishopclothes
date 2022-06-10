import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getAuth } from 'firebase/auth';

import { CartItem } from 'src/app/model/cart';

import { CartService } from 'src/app/service/cart.service';
import { CheckoutService } from 'src/app/service/checkout.service';
import { De_OrderService } from 'src/app/service/de_order.service';


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

  constructor(private cartService: CartService, 
    private checkoutService: CheckoutService,
  
    private formBuilder: FormBuilder,

    ) {}

  ngOnInit(): void {
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
 
}
