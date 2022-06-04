import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../service/cart.service';
import { getAuth } from 'firebase/auth';

@Component({
  selector: 'app-header-home',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderHomeComponent implements OnInit {
  totalItemNumber: number = 0;
  products: any = [];

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getProductData().subscribe((res) => {
      this.totalItemNumber = res.length;
      this.products = res;
    });
    this.getUser();
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
}
