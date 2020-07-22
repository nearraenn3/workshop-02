import { Product } from './models/product'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public product: Product;

  constructor(private http: HttpClient) { }
  getAllProduct(): Observable<Product[]> {
    const p1 = new Product('1101', 'Name 01', 100.0, 5, true);
    const p2 = new Product('1102', 'Name 02', 200.50, 3, false);
    const p3 = new Product('1103', 'Name 03', 300.75, 4, true);
    return of([p1, p2, p3]);

    //return this.http.get<Product[]> ( 'http://165.22.255.58:3000/products' );
  }

  selectProduct(product:Product){
    this.product=product;
  }



}
