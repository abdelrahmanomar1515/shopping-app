import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ShoppingListActions } from 'src/app/shopping-list/store';
import { AppState } from 'src/app/store/state';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  route: Route;
  constructor(private recipeService: RecipeService,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    );
  }
  onToShoppingList() {
    this.store.dispatch(ShoppingListActions.addIngredients({ ingredients: this.recipe.ingredients }));
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
