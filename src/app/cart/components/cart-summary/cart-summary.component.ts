import { Observable } from 'rxjs';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  amount: number;
  totalItems: number;

  totalItems$: Observable<number>;

  constructor(private cartService: CartService) {
     // this.amount = this.cartService.amount;
     // this.totalItems = this.cartService.totalItems;
     this.totalItems$ = this.cartService.totalItems$;
   }

  ngOnInit() {
    // susbcribe for amount data change
    this.cartService
        .amount$
        .subscribe ( value => {
          console.log('amount data ', value);
          this.amount = value;
        });
  }

}
