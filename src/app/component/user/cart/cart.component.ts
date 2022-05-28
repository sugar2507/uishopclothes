import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  allProduct: any = 0;
  products:any=[];
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getProductData().subscribe(res => {
      this.products = res;
      this.allProduct = this.cartService.getTotalAmount();
    });
  }
  removeProduct(item :any){
    this.cartService.RemoveItemCart(item)
}
}
