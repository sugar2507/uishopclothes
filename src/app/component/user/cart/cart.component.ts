import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart';
import { Products } from 'src/app/model/products';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  // allProduct: any = 0;
   totalItemNumber: number = 0;

  products:any=[];
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getProductData().subscribe(res => {
      this.products = res;
      this.totalItemNumber=res.length;
      // this.allProduct = this.cartService.getTotalAmount();
      // this.calcCartTotal();
    });
    
  } 
  removeProduct(item :any){
    this.cartService.RemoveItemCart(item)
}

public createImgPath = (serverPath: string) => {
  return `https://localhost:44377/Photos/${serverPath}`.replace(
    'localhost:4200/',
    '' );
};

}