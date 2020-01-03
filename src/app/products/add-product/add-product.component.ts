import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  qualityChoices:string[];
  submitted:boolean;
  newProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    rate: new FormControl('', [Validators.required]),
    quality: new FormControl('', [Validators.required])
  });
  constructor(private productService:ProductService, private router:Router) {
    this.qualityChoices = [
      '1','2','3'
    ];
  }

  ngOnInit() {
  }

  onSubmit(){
    this.submitted=true;
    console.log(this.newProductForm);
    this.productService.addProduct(this.newProductForm.value);
    this.router.navigate(['/products']);
  }

}
