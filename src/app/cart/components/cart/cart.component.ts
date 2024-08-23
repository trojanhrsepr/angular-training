import { CartItem } from './../../models/cart-item';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { 
    console.log('CartComponent created');
  }

  ngOnInit() {
  }

  addItem() {
    const id = Math.ceil(Math.random() * 10000);
    const cartItem = new CartItem();
    cartItem.id = id;
    cartItem.name = `Product ${id}`;
    cartItem.qty = 1;
    cartItem.price = Math.ceil(Math.random() * 100);

    this.cartService.addItem(cartItem);
  }

  empty() {
    this.cartService.empty();
  }

}
