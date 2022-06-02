import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  totalItemNumber: number = 0;
  totalItemPrice: number = 0.0;
  products:any=[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProductData().subscribe(res => {
      this.products = res;
      this.totalItemNumber=res.length;

      for(var i=0;  i<this.products.length;i++){
        this.totalItemPrice += this.products[i].PRICE;
    }
  }
)}

public createImgPath = (serverPath: string) => {
  return `https://localhost:44377/Photos/${serverPath}`.replace(
    'localhost:4200/',
    '' );
}
}