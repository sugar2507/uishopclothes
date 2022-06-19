import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { getAuth } from 'firebase/auth';
import { SexService } from './../../../../../service/sex.service';
import { SizeService } from 'src/app/service/size.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: any;
  id: any;
  totalItemNumber: number = 0;
  products: any = [];
  idSex: any;
  sex: any;
  nameSex: any;

  idSize: any;
  size: any;
  nameSize: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private sexService: SexService,
    private sizeService: SizeService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getRoute();
    this.cartService.getProductData().subscribe((res) => {
      this.totalItemNumber = res.length;
      this.products = res;
    });
    this.getUser();
  }
  email!: string;

  getRoute() {
    this.productService.getDetailproduct(this.id).subscribe((res: any) => {
      this.product = res;
      console.log(this.product);

      for (var i = 0; i < this.product.length; i++) {
        this.idSex = this.product[i].SEX;
        this.idSize = this.product[i].SIZE;
        this.sexService.getSexById(this.idSex).subscribe(
          (res) => {
            this.sex = res;
            for (var i = 0; i < this.sex.length; i++) {
              this.nameSex = this.sex[0].NAME;
            }
          },
          (err) => {
            'Fetching error';
          }
        );
        this.sizeService.getSizeById(this.idSize).subscribe(
          (res) => {
            this.size = res;
            for (var i = 0; i < this.size.length; i++) {
              this.nameSize = this.size[0].NAME;
            }
          },
          (err) => {
            'Fetching error';
          }
        );
      }

      
    });
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
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
