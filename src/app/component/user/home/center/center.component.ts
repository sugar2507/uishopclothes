import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartItem } from 'src/app/model/cart';
import { Products } from 'src/app/model/products';
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
  empObj: Products = new Products();
  prodList: Products[] = [];
  cart: CartItem[] = [];
  products: any = [];

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
    this.getAllProduct();
  }
  addToCart(product: Products) {
    this.CartService.addToCart(product);
  
    // this.cart.qty=1;
    window.alert('Your product has been added to the cart!');
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
  // addTocart(product: Products, t = 0) {
  //   this.CartService.getProductData().subscribe((res) => {
  //     this.products = res;
  //     this.cart = this.products;
  //     if (this.products.length == 0) {
  //       this.CartService.addToCart(product);
  //     } 
  //     else {
  //       for (var i=0;i<this.products.length;i++) {
  //         if (product.ID == this.cart[i].productId && this.cart[i].qty>=1) {
  //           this.t += this.cart[i].qty;
  //           this.cart[i].qty = this.t;
  //           console.log('cartitem qty', this.cart[i].qty);
  //           console.log(this.t);
  //         } 
  //         else {
  //           this.CartService.addToCart(product);
  //           this.cart[i].productId = this.products[i].ID;
  //           this.cart[i].price = this.products[i].PRICE;
  //           this.cart[i].productName = this.products[i].NAME;
  //           this.cart[i].qty = 1;
  //           console.log('prod_id', this.products[i].ID);

  //           console.log('cartitem Name', this.cart[i].productName);
  //         }
  //         console.log('break')
  //         break;
  //       }
  //     }
  //     //  this.CartService.RemoveItemCart(this.cart);
  //   });
  //   console.log('cart', this.cart);
  // }
}
