import { CartItem } from './../../../cart/models/cart-item';
import { CartService } from './../../../cart/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  subscription: Subscription;

  constructor(private productService: ProductService, 
              private cartService: CartService) { }

  ngOnInit() {
    console.log('product list init')
     
    this.subscription =  this.productService
        .getProducts()
        .subscribe ( products => {
          this.products = products;
        });
  }

  // invoked when component destroyed
  ngOnDestroy() {
    console.log('product list destoryed')
    
    this.subscription.unsubscribe();
  }

  addToCart(product: Product) {
    const cartItem = new CartItem();
    cartItem.id = product.id;
    cartItem.name = product.name;
    cartItem.price = product.price;
    cartItem.qty = 1;

    this.cartService.addItem(cartItem);
  }

}
