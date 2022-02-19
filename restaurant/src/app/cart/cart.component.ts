import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { IMeals } from '../IMeals';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  amount: number = 0;
  service: number = 0;
  discount: number = 0;
  totalPrice: number = 0;
  items: IMeals[] = [];
  checkoutForm = this.fb.group({
    name: '',
    address: '',
  });

constructor(private cartService: CartService, private fb: FormBuilder) { }

clearCart() {
  window.alert('Your cart has been cleared');
  this.items = this.cartService.clearCart();
}

onSubmit() {
  if(this.checkoutForm.valid) {
    var sum = this.checkoutForm.value;
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.priceSum()
  }
}

priceSum(){
  this.amount = 0;
  this.service = 0;
  this.discount = 0;
  this.totalPrice = 0;
  for(let val of this.items) {
    this.amount = this.amount + val.price
    this.totalPrice = this.amount
  }
  if(this.amount >= 40) {
    this.discount = this.amount * 0.15;
    this.service = this.amount * 0.10;
    this.totalPrice = this.amount + this.service - this.discount;
  }
  else{
    this.service = this.amount * 0.1
    this.totalPrice = this.amount + this.service - this.discount;
  }

}


ngOnInit(): void {
  this.items = this.cartService.getItems();
  this.priceSum()
}
}
