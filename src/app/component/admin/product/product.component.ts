import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categories } from 'src/app/model/category';
import { Product } from 'src/app/model/product';
import { Sex } from 'src/app/model/sex';
import { CategoriesService } from 'src/app/service/category.service';
import { CompaniesService } from 'src/app/service/company.service';
import { ProductService } from 'src/app/service/product.service';
import { SexService } from 'src/app/service/sex.service';
import { Company } from '../../../model/company';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  progress!: number;
  message!: string;
  @Output() public onUploadFinished = new EventEmitter();
  prodDetail!: FormGroup;
  prodCreate!: FormGroup;
  prodObj: Product = new Product();
  prodList: Product[] = [];

  // PhotoPath!: String;
  pro!: Product;
  constructor(
    private formBuilder: FormBuilder,
    private prodService: ProductService,
    private cateService: CategoriesService,
    private companiesService: CompaniesService,
    private sexService: SexService,
    private http: HttpClient
  ) {}
  myselected: any;
  CategoryList: Categories[] = [];
  CompanyList: Company[] = [];
  SexList: Sex[] = [];
  @Input()
  PhotoFilePath: any;
  PhotoProduct: any;
  ngOnInit(): void {
    this.getAllSex();
    this.getAllCompanies();
    this.getAllCategory();
    this.getAllProduct();
    this.prodDetail = this.formBuilder.group({
      id: [''],
      name: [''],
      quantity: [''],
      price: [''],
      oriprice: [''],
      usdprice: [''],
      image: [''],
      company: [''],
      hotproduct: [''],
      sex: [''],
      size: [''],
      description: [''],
      idcategory: [''],
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
      size: [''],
      description: [''],
      idcategory: [''],
    });
    this.PhotoProduct = 'anonymous.png';
    this.PhotoFilePath = 'https://localhost:44377/Photos/' + this.PhotoProduct;
  }
  getAllSex() {
    this.sexService.getAllSex().subscribe(
      (res) => {
        this.SexList = res;
        console.log(this.SexList);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  getAllCompanies() {
    this.companiesService.getAllCompanies().subscribe(
      (res) => {
        this.CompanyList = res;
        console.log(this.CompanyList);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  getAllCategory() {
    this.cateService.getAllCategory().subscribe(
      (res) => {
        this.CategoryList = res;
        console.log(this.CategoryList);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  // getProductById(id: any) {
  //   this.prodService.getProductById(id).subscribe(
  //     (res) => {
  //       this.pro = res;
  //       console.log(res);
  //     },
  //     (err) => {
  //       console.log('error while fetching data');
  //     }
  //   );
  // }

  getAllProduct() {
    this.prodService.getAllProduct().subscribe(
      (res) => {
        this.prodList = res;
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
  public onDepthChangeSex(e: any): void {
    this.prodCreate.value.sex = e;
    console.log('selected :', e);
  }
  public onDepthChange(e: any): void {
    console.log('selected company :', e.value);
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
    this.prodObj.IMAGE = this.prodCreate.value.image.replace(
      /C:\\fakepath\\/,
      ''
    );
    this.prodObj.COMPANY = this.prodCreate.value.company;
    this.prodObj.SEX = this.prodCreate.value.sex;
    this.prodObj.SIZE = this.prodCreate.value.size;
    this.prodObj.DESCRIPTION = this.prodCreate.value.description;
    this.prodObj.IDCATEGORY = this.prodCreate.value.idcategory;
    console.log(this.prodCreate.value.idcategory);
    this.PhotoFilePath =
      this.prodService.PhotoUrl + this.prodCreate.value.image;

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

  editProduct(product: Product) {
    this.prodDetail.controls['id'].setValue(product.ID);
    //var imageById = this.getData(product);
    this.prodDetail.controls['name'].setValue(product.NAME);
    this.prodDetail.controls['quantity'].setValue(product.QUANTITY);
    this.prodDetail.controls['price'].setValue(product.PRICE);
    this.prodDetail.controls['oriprice'].setValue(product.ORI_PRICE);
    this.prodDetail.controls['usdprice'].setValue(product.USD_PRICE);
    this.prodDetail.controls['hotproduct'].setValue(product.HOTPRODUCT);
    this.prodDetail.controls['image'].setValue(product.IMAGE);
    this.prodDetail.controls['company'].setValue(product.COMPANY);
    this.prodDetail.controls['sex'].setValue(product.SEX);
    this.prodDetail.controls['size'].setValue(product.SIZE);
    this.prodDetail.controls['description'].setValue(product.DESCRIPTION);
    this.prodDetail.controls['idcategory'].setValue(product.IDCATEGORY);
    this.PhotoFilePath =
      this.prodService.PhotoUrl + this.prodDetail.value.image;

    console.log(this.prodDetail.controls['image'].setValue(product.IMAGE));
  }
  updateProduct() {
    this.prodObj.ID = this.prodDetail.value.id;
    this.prodObj.NAME = this.prodDetail.value.name;
    this.prodObj.QUANTITY = this.prodDetail.value.quantity;
    this.prodObj.PRICE = this.prodDetail.value.price;
    this.prodObj.ORI_PRICE = this.prodDetail.value.oriprice;
    this.prodObj.USD_PRICE = this.prodDetail.value.usdprice;
    this.prodObj.HOTPRODUCT = this.prodDetail.value.hotproduct;
    this.prodObj.IMAGE = this.prodDetail.value.image.replace(
      /C:\\fakepath\\/,
      ''
    );
    this.prodObj.COMPANY = this.prodDetail.value.company;
    this.prodObj.SEX = this.prodDetail.value.sex;
    this.prodObj.SIZE = this.prodDetail.value.size;
    this.prodObj.DESCRIPTION = this.prodDetail.value.description;
    this.prodObj.IDCATEGORY = this.prodDetail.value.idcategory;
    this.PhotoFilePath =
      this.prodService.PhotoUrl + this.prodDetail.value.image;

    console.log(this.prodObj.NAME);
    console.log(this.prodObj);
    console.log(this.PhotoFilePath);
    this.prodService.updateProduct(this.prodObj).subscribe(
      (res) => {
        console.log(res);

        alert('cap nhat thanh cong');
        this.prodCreate.reset();
        this.getAllProduct();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteProduct(emp: Product) {
    this.prodService.deleteProduct(emp).subscribe(
      (res) => {
        console.log(res);
        alert('Xóa thành công ');
        this.getAllProduct();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  uploadPhotoDetail(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.http
      .post('https://localhost:44377/api/Products/SaveFile', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((data: any) => {
        this.prodObj.IMAGE = data.toString();
        this.PhotoFilePath = (
          this.prodService.PhotoUrl +
          '/' +
          this.prodDetail.value.image
        ).replace(/C:\\fakepath\\/, '');
      });
  }

  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.http
      .post('https://localhost:44377/api/Products/SaveFile', formData, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((data: any) => {
        this.prodObj.IMAGE = data.toString();
        this.PhotoFilePath = (
          this.prodService.PhotoUrl +
          '/' +
          this.prodCreate.value.image
        ).replace(/C:\\fakepath\\/, '');
      });
  }
  public createImgPath = (serverPath: string) => {
    console.log(serverPath);
    return `https://localhost:44377/Photos/${serverPath}`.replace(
      'localhost:4200/',
      ''
    );
  };
 
}
