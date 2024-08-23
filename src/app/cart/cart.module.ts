import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';

import {Route, RouterModule} from '@angular/router';

const routeConfig: Route[] = [
  {
    path: '', // lazy loading
    // path: 'cart',
    component: CartComponent
  }
];


@NgModule({
  declarations: [
    CartComponent,
    CartListComponent, 
    CartSummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routeConfig)
  ]
})
export class CartModule { }
