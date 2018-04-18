import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
      new Recipe(
         "Tasty Schnitzel",
         "A super-tasty Schnitzel - just awesome!",
         "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG",
         [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
         ]
      ),
      new Recipe(
         "Big Fat Burger",
         "What else you need to say?",
         "https://www.redrobin.com/content/dam/web/menu/2015-june/gourmet-cheeseburger-1100.jpg",
         [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
         ]
      )
   ];

   getRecipes() {
      return this.recipes.slice();  // returns a new copy of the array
   }
}
