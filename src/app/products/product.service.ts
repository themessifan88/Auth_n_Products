import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './models/Product';

@Injectable()
export class ProductService {
  private productSubject: BehaviorSubject<Product<any>[]>;
  private dummyProducts;
  public products$: Observable<Product<any>[]>;
  constructor() {
    console.log('constructor');
    this.dummyProducts = require('./dummy-products.json');
  }

  getProducts() {
    this.productSubject = new BehaviorSubject<Product<any>[]>(this.dummyProducts);
    this.products$ = this.productSubject.asObservable();
    return this.products$;
  }

  addProduct(product) {
    let newProduct = new Product(product);
    this.dummyProducts.push(newProduct);
    this.productSubject.next(this.dummyProducts);
  }

  deleteProduct(id) {
    let filteredProducts = this.productSubject.value.filter(product=> product.id != id);
    this.productSubject.next(filteredProducts);
  }
}
