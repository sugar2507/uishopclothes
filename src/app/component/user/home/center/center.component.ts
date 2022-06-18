import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartItem } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { CategoriesService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css'],
})
export class CenterComponent implements OnInit {
  @Input()
  index!: number;
  t: any = 1;
  empObj: Product = new Product();
  prodList: Product[] = [];
  cart: CartItem[] = [];
  products: any = [];
  prodListMan: Product[] = [];
  prodListWomen: Product[] = [];
  empDetail!: FormGroup;
  PhotoFilePath!: string;
  constructor(
    private formBuilder: FormBuilder,
    private CartService: CartService,
    private prodService: ProductService,
    private cateService: CategoriesService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.empDetail = this.formBuilder.group({
    //   id: [''],
    //   name: [''],
    // });
    this.getProductByMan();
    this.getProductByWoman();
    this.getAllProduct();
  }
  addToCart(product: Product) {
    this.CartService.addToCart(product);

    // this.cart.qty=1;
    window.alert('Your product has been added to the cart!');
  }
  getProductByMan() {
    this.prodService.getProductBySex(1).subscribe(
      (res) => {
        this.prodListMan = res;
        this.PhotoFilePath = this.prodService.PhotoUrl;
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  getProductByWoman() {
    this.prodService.getProductBySex(2).subscribe(
      (res) => {
        this.prodListWomen = res;
        this.PhotoFilePath = this.prodService.PhotoUrl;
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  getAllProduct() {
    this.prodService.getAllProduct().subscribe(
      (res) => {
        this.prodList = res;
        this.PhotoFilePath = this.prodService.PhotoUrl;
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44377/Photos/${serverPath}`.replace(
      'localhost:4200/',
      ''
    );
  };
}
