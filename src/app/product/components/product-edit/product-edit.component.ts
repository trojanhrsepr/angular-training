import { Observable } from 'rxjs';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

import {ActivatedRoute, Router} from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Brand } from '../../models/brand';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product: Product = new Product(); // useful for create
  brands$ : Observable<Brand[]>;

  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']; 
    console.log('id is ', id);

    if (id) {
      //edit
      this.productService.getProduct(id)
          .subscribe ( product => {
            this.product = product;
          });
    }

    // async pipe
    this.brands$ = this.productService.getBrands();
  }

  save() {
    this.productService
        .saveProduct(this.product)
        .subscribe ( savedProduct => {
          console.log('product saved', savedProduct);
          this.product = savedProduct;
          this.router.navigateByUrl('/products');
        })
  }

}
