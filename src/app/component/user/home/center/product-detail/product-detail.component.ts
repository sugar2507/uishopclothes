import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/model/products';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: any;
  id: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getRoute();
  }
  getRoute() {
    this.productService.getDetailproduct(this.id).subscribe((res: any) => {
      this.product = res;
      console.log(this.product);
    });
  }
  addToCart(product: Products) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
