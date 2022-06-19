import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart';
import { CartService } from './../../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalItemNumber: number = 0;
  totalItemPrice: number = 0.0;
  products: any = [];
  ICart: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProductData().subscribe((res) => {
      this.totalItemNumber = res.length;
      this.products = res;
      this.ICart = res;
      console.log('cart-res', this.ICart);

      for (var i = 0; i < 1; i++) {
        this.ICart[i].img = res[i].IMAGE;
        this.ICart[i].productName = res[i].NAME;
        this.ICart[i].price = res[i].PRICE;
        this.ICart[i].ori_price = res[i].ORI_PRICE;
        this.ICart[i].productId = res[i].ID;
        this.ICart[i].qty = 1;
        this.totalItemPrice += this.ICart[i].price;
        console.log('price', this.ICart[i].price);
      }
      console.log('cart', this.ICart);
    });
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:44377/Photos/${serverPath}`.replace(
      'localhost:4200/',
      ''
    );
  };
}
