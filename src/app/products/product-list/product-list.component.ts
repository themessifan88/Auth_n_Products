import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product<any>[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(items=>{
      this.products = items;
    });
  }

  deleteProduct(id){
    this.productService.deleteProduct(id);
  }

}
