import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../service/cart.service';
import { getAuth } from 'firebase/auth';
import { CategoriesService } from 'src/app/service/category.service';
import { Categories } from 'src/app/model/category';

@Component({
  selector: 'app-header-home',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderHomeComponent implements OnInit {
  totalItemNumber: number = 0;
  products: any = [];
  cateList: Categories[] = [];
  constructor(
    private cartService: CartService,
    private cateService: CategoriesService
  ) {}
  ngOnInit(): void {
    this.getAllCategory();
    this.cartService.getProductData().subscribe((res) => {
      this.totalItemNumber = res.length;
      this.products = res;
    });
    this.getUser();
  }
  email!: string;

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
