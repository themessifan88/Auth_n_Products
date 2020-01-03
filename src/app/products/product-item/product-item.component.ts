import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() item:{id:string,name:string,rate:string,quality:string};
  @Output() deleteProduct: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() { }

  deleteItem(id){
    this.deleteProduct.emit(id);
  }

}
