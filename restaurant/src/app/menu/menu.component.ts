import { Component, OnInit } from '@angular/core';
import { meals } from '../meals';
import { IMeals } from '../IMeals';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  meals:IMeals[] = meals;

  constructor() { }

  ngOnInit(): void {
  }

}
