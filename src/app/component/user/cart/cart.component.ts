import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart';
import { Companies } from 'src/app/model/companies';
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
   totalItemPrice: number = 0.0;

  products:any=[];
  brands:Companies[]=[];
  ICart: CartItem[]=[];
  
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getProductData().subscribe(res => {
      this.products = res;
      this.totalItemNumber=res.length;
      for(var i=0;  i<this.products.length;i++){
        this.totalItemPrice += this.products[i].PRICE;
    }
      // this.allProduct = this.cartService.getTotalAmount();
      // this.calcCartTotal();
    });
    
  } 
  removeProduct(item :any){
    this.cartService.RemoveItemCart(item);
    this.totalItemNumber-=1;
}

public createImgPath = (serverPath: string) => {
  return `https://localhost:44377/Photos/${serverPath}`.replace(
    'localhost:4200/',
    '' );
};

}