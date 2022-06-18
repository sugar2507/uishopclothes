import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../model/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  ProdUrl: string;
  PhotoUrl: string;

  constructor(private http: HttpClient) {
    this.ProdUrl = 'https://localhost:44377/api/Products';
    this.PhotoUrl = 'https://localhost:44377/Photos/';
  }

  getAllProduct() {
    return this.http.get<Product>(this.ProdUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // getProductById(id: any) {
  //   return this.http.get<Product>(this.ProdUrl + `"/${id}"`);
  // }
  // getAllProductByCate(catId: any) {
  //   return this.http.get<Product>(
  //     'https://localhost:44377/api/Products?catId=' + catId
  //   );
  // }
  addProduct(emp: Product) {
    return this.http.post<Product>(this.ProdUrl, emp);
  }

  UploadPhoto(emp: Product) {
    return this.http.post<Product>(this.ProdUrl + '/SaveFile', emp);
  }
  getDetailproduct(emp: number) {
    return this.http.get<Product>(this.ProdUrl + '/' + emp);
  }
  getProductByCate(id: number) {
    return this.http.get<Product[]>(this.ProdUrl + '/GetProductByCate/' + id);
  }
  getProductByBrand(id: number) {
    return this.http.get<Product[]>(this.ProdUrl + '/GetProductByBranch/' + id);
  }
  getProductBySex(id: number) {
    return this.http.get<Product[]>(this.ProdUrl + '/GetProductBySex/' + id);
  }
  updateProduct(emp: Product) {
    return this.http.put<Product>(this.ProdUrl, emp);
  }
  deleteProduct(emp: Product) {
    return this.http.delete<Product>(this.ProdUrl + '/' + emp.ID);
  }
}
