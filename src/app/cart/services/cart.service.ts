import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

import {Subject, Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartItems: CartItem[] = [];

  private _amount = 0;
  private _totalItems = 0;

  amount$ : BehaviorSubject<number> = new BehaviorSubject(this._amount);
  totalItems$: BehaviorSubject<number> = new BehaviorSubject(this._totalItems);

  constructor() { 
    console.log('CartService created');
  }

  get amount() {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
    // publish the data to susbcribers
    this.amount$.next(this._amount); 
  }

  get totalItems() {
    return this._totalItems;
  }

  set totalItems(value: number) {
    this._totalItems = value;
    this.totalItems$.next(this._totalItems);
  }

  get cartItems() {
    return this._cartItems;
  }

  calculate() {
    let amount = 0;
    let total = 0;
    for (let item of this._cartItems) {
      amount += item.qty * item.price;
      total += item.qty;
    }

    this.amount = amount; // calls setter amount
    this.totalItems = total; // calls setter
  }

  addItem(item: CartItem) {
    this._cartItems.push(item);
    this.calculate();
  }

  empty() {
    this._cartItems.splice(0, this._cartItems.length); 
    this.calculate();
  }

}
