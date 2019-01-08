import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  id: number
  route: Route
  constructor(private recipeService: RecipeService,
     private shoppingListService: ShoppingListService,
     private activatedRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getRecipeById(this.id)
      }
    )
  }
  onToShoppingList(){
    for( let ingredient of this.recipe.ingredients){
      this.shoppingListService.addIngredient(ingredient)
    }
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])
  }
}
