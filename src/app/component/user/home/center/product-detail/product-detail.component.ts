import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';
import { getAuth } from 'firebase/auth';

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
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
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
