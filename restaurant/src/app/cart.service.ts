import { Injectable } from '@angular/core';
import { IMeals } from './IMeals';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IMeals [] = [];

  constructor() { }

  addToCart(meal: IMeals) {
    this.items.push(meal);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }
}
