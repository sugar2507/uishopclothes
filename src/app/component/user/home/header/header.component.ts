import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../service/cart.service';
import { getAuth } from 'firebase/auth';
import { CategoriesService } from 'src/app/service/category.service';
import { Categories } from 'src/app/model/category';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/service/firebase.service';
import { CartItem } from 'src/app/model/cart';

@Component({
  selector: 'app-header-home',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderHomeComponent implements OnInit {
  totalItemNumber: number = 0;
  Login: any;
  NonLogin: any;
  products: any = [];
  cateList: Categories[] = [];
  totalItemPrice: number = 0.0;
  ICart: CartItem[] = [];
  constructor(
    private cartService: CartService,
    private cateService: CategoriesService,
    private router: Router,
    private auth: FirebaseService
  ) {}
  ngOnInit(): void {
    this.getAllCategory();

    this.cartService.getProductData().subscribe((res) => {
      this.totalItemNumber = res.length;
      this.products = res;
      this.ICart = res;
      console.log('cart-res', this.ICart);

      for (var i = 0; i < this.ICart.length; i++) {
        this.ICart[i].img = res[i].IMAGE;
        this.ICart[i].productName = res[i].NAME;
        this.ICart[i].price = res[i].PRICE;
        this.ICart[i].ori_price = res[i].ORI_PRICE;
        this.ICart[i].productId = res[i].ID;
        this.ICart[i].qty = 1;

        console.log('price', this.totalItemPrice);
      }
      for (var i = 0; i < 1; i++) {
        this.totalItemPrice = this.totalItemPrice + this.ICart[i].price;
      }

      console.log('cart', this.ICart);
    });
    this.getUser();
  }
  email!: string;
  logout() {
    this.auth.logout();
  }
  getAllCategory() {
    this.cateService.getAllCategory().subscribe(
      (res) => {
        this.cateList = res;
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
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
}
