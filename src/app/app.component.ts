import { Component } from '@angular/core';
import { Recipe } from './model/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  recipe: Recipe[] = [
    new Recipe('Peanut Butter Jelly Sandwich', '2 slices ofwhole wheat bread, grape jelly, peanut butter', 'spread peanut button on one slice of bread, grape jelly on another slice of bread, combine and enjoy!'),
    new Recipe('eggs','eggs, vegtable oil, salt', 'pour oil on pan so egg wont stick to pan, then add eggs and salt for some flavor'),
    new Recipe('baked chicken','chicken, marinate sauce, salt and pepper', 'marinate chicken for an hour, preheat oven at 450 degrees, put chicken in glass bakeware and cover with aluminum foil, bake for 35-40 minutes, enjoy'),
  ];
}
