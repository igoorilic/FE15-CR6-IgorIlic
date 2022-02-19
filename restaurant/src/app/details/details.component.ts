import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { IMeals } from '../IMeals';
import { meals } from '../meals';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  meal: IMeals = {} as IMeals;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

    addToCart(){
      window.alert('Your meal has been added to the cart!');
      this.cartService.addToCart(this.meal);
    }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['mealId'];
      this.meal = meals[this.id]
    });


  }

}
