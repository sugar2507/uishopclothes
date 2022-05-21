import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { CartService } from 'src/app/service/cart.service';
import { Products } from 'src/app/model/products';

@Component({
  selector: 'app-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class DetailComponent implements OnInit {
  product = new Products;
  constructor(private route:ActivatedRoute,
    private productService:ProductService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.getRoute(this.route.snapshot.params['id']);
  }
  getRoute(id:any){
    this.productService.getDetailproduct(id).subscribe((res:any)=>{
      this.product = res;
    });    
  }
  addToCart(product: Products) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}


