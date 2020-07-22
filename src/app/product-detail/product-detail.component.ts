import { Product } from './../models/product'
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product;

  constructor(public service: ProductService) {
    this.product=service.product;
   }

  
  onRatingClicked(message: string): void {
    alert(message);
  }

}
