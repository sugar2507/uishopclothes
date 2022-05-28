import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../service/cart.service';

@Component({
  selector: 'app-header-home',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderHomeComponent implements OnInit {
  totalItemNumber: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getProductData().subscribe(res  => {
      this.totalItemNumber = res.length;
    });
  }
}
