import { Component, OnInit ,Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Products } from 'src/app/model/products';
import { ProductService } from 'src/app/service/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prodDetail!: FormGroup;
  prodCreate!: FormGroup;
  prodObj: Products = new Products();
  prodList: Products[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private prodService: ProductService,
    private http: HttpClient
  ) {}

  @Input()
  PhotoFilePath!: string;

  ngOnInit(): void {
    this.getAllProduct();
    this.prodDetail = this.formBuilder.group({
      id:[''],
      name: [''],
    });
    this.prodCreate = this.formBuilder.group({
      name: [''],
      quantity: [''],
      price: [''],
      oriprice: [''],
      usdprice: [''],
      image: [''],
      company: [''],
      hotproduct: [''],
      sex: [''],
      description: [''],
      idcategory: [''],
    })
  }

  getAllProduct() {
    this.prodService.getAllProduct().subscribe(
      (res) => {
        this.prodList = res;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }

  addProduct() {
    console.log(this.prodCreate);
    this.prodObj.ID = this.prodCreate.value.id;
    this.prodObj.NAME = this.prodCreate.value.name;
    this.prodObj.QUANTITY = this.prodCreate.value.quantity;
    this.prodObj.PRICE = this.prodCreate.value.price;
    this.prodObj.ORI_PRICE = this.prodCreate.value.oriprice;
    this.prodObj.USD_PRICE = this.prodCreate.value.usdprice;
    this.prodObj.HOTPRODUCT = this.prodCreate.value.hotproduct;
    this.prodObj.IMAGE = this.prodCreate.value.image;
    this.prodObj.COMPANY = this.prodCreate.value.company;
    this.prodObj.SEX = this.prodCreate.value.sex;
    this.prodObj.DESCRIPTION = this.prodCreate.value.description;
    this.prodObj.IDCATEGORY = this.prodCreate.value.idcategory;

    this.prodService.addProduct(this.prodObj).subscribe(
      (res) => {
        console.log(res);
        this.prodCreate.reset();
        this.getAllProduct();
      },
      (err) => {
        console.log(err);
      }
    );
  }



  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.prodService.UploadPhoto(this.prodObj).subscribe((data:any)=>{
      this.prodObj.IMAGE=data.toString();
      this.PhotoFilePath=this.prodService.PhotoUrl+this.prodObj.IMAGE;
    })
  }
}
