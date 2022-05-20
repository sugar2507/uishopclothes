import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Products } from '../model/products';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProdUrl: string;
  PhotoUrl: string;

  constructor(private http: HttpClient) {
    this.ProdUrl = 'https://localhost:44377/api/Products';
    this.PhotoUrl = 'https://localhost:44377/Photos/';
  }

  getAllProduct() {
    return this.http.get<Products>(this.ProdUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  addProduct(emp: Products) {
    return this.http.post<Products>(this.ProdUrl, emp).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  UploadPhoto(emp: Products) {
    return this.http.post<Products>(this.ProdUrl +'/SaveFile', emp).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  
}
