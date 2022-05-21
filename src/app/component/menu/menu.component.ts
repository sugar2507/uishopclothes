import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductService } from 'src/app/service/product.service';

import { CategoriesService } from 'src/app/service/category.service';
import { Categories } from 'src/app/model/category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  empList: Categories[] = [];
  PhotoFilePath!: string;
  prodList: Products[] = [];
  dataPro: any;
  constructor(
    private prodService: ProductService,

    private empService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllProduct();
  }
  public createImgPath = (serverPath: string) => {
    return `https://localhost:44377/Photos/${serverPath}`.replace(
      'localhost:4200/',
      ''
    );
  };
  // public createImgPath = (serverPath: string) => {
  //   return `assets/img/${serverPath}`;
  // };
  getAllCategory() {
    this.empService.getAllCategory().subscribe(
      (res) => {
        this.empList = res;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  getAllProduct() {
    this.prodService.getAllProduct().subscribe(
      (res) => {
        this.prodList = res;
        this.PhotoFilePath = this.prodService.PhotoUrl;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  // uploadPhoto(event:any){
  //   var file=event.target.files[0];
  //   const formData:FormData=new FormData();
  //   formData.append('uploadedFile',file,file.name);

  //   this.prodService.UploadPhoto(this.prodObj).subscribe((data:any)=>{
  //     this.prodObj.IMAGE=data.toString();

  //   })
  // }
}
