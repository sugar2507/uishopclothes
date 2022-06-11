import { getLocaleCurrencyCode } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Categories } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { CategoriesService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../menu.component.css'],
})
export class ProductListComponent implements OnInit {
  PhotoFilePath!: string;
  dataPro: any;
  catId: any;
  prodList: Product[] = [];
  empList: Categories[] = [];
  category!: Categories;
  constructor(
    private prodService: ProductService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private empService: CategoriesService
  ) {}
  ngOnInit(): void {
    this.catId = this.route.snapshot.params['id'];
    console.log('ID: ', this.catId);

    this.route.params.subscribe((params: Params) => {
      if (
        this.route.snapshot.params['id'] == 'all' ||
        !this.route.snapshot.params['id']
      ) {
        this.getAllCategory();
        this.getAllProduct();
      } else {
        this.catId = params['id'];
        console.log('ID: ', this.catId);
        this.getAllCategory();
        this.getRoute();
      }
    });

    // this.getProductCatId(this.catId);
    console.log(this.catId);
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44377/Photos/${serverPath}`.replace(
      'localhost:4200/',
      ''
    );
  };
  getRoute() {
    this.productService.getProductByCate(this.catId).subscribe(
      (res: any) => {
        console.log(this.catId);
        this.prodList = res;
        console.log(this.prodList);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  getAllCategory() {
    this.empService.getAllCategory().subscribe(
      (res) => {
        this.empList = res;
        console.log(res);
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
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
}
