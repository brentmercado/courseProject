import { Recipe } from './recipe.model';

export class RecipeService {
   private recipes: Recipe[] = [
      new Recipe("A Test Recipe", "This is simply a test", "https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg"),
      new Recipe("Another Test Recipe", "This is simply a test", "https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg")
   ];

   getRecipes() {
      return this.recipes.slice();  // returns a new copy of the array
   }
}
