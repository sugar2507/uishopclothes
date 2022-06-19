import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { De_OrderService } from 'src/app/service/de_order.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail-orrder',
  templateUrl: './detail-orrder.component.html',
  styleUrls: ['./detail-orrder.component.css'],
})
export class DetailOrrderComponent implements OnInit {
  constructor(private route: ActivatedRoute, private deOrderService:De_OrderService, private productService:ProductService) {}

  order!: any;
  idPro:any;
  pro:any;
  namePro:any;
  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getRoute();
  }
  getRoute() {
    this.deOrderService.getDetailOrder(this.id).subscribe((res: any) => {
      this.order = res;
      console.log(this.order);
      for (var i = 0; i < this.order.length; i++) {
        this.idPro = this.order[i].IDPRODUCT;
       
        this.productService.getProductById(this.idPro).subscribe(
          (res) => {
            this.pro = res;
            for (var i = 0; i < this.pro.length; i++) {
              this.namePro = this.pro[0].NAME;
            }
          },
          (err) => {
            'Fetching error';
          }
        );
      }
     
    });
  }
}
