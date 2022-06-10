import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartItem } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { Companies } from 'src/app/model/companies';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalItemNumber: number = 0;
  totalItemPrice: number = 0.0;
  products: any = [];
  ICart: CartItem[] = [];
  proForm!: FormGroup;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.cartService.getProductData().subscribe((res) => {
      // this.products = res;
      this.ICart = res;
      console.log('cart-res', this.ICart);

      this.totalItemNumber = res.length;

      for (var i = 0; i < this.ICart.length; i++) {
        this.ICart[i].img = res[i].IMAGE;
        this.ICart[i].productName = res[i].NAME;
        this.ICart[i].price = res[i].PRICE;
        this.ICart[i].productId = res[i].ID;
        this.ICart[i].qty = 1;
        this.totalItemPrice += this.ICart[i].price;
      }
      console.log('cart', this.ICart);
    });
    this.proForm = this.formBuilder.group({
      id: [''],
      name: [''],
    });
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
}
