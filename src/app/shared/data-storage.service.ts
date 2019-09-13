import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { AuthSelectors } from '../auth/store';
import { Recipe } from '../recipes/recipe';
import { RecipeService } from '../recipes/recipe.service';
import { AppState } from '../store/state';


@Injectable()
export class DataStorageService {
  baseURL = 'https://my-ng-shopping-app.firebaseio.com';
  token: string;

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private store: Store<AppState>
  ) {
    this.store.pipe(select(AuthSelectors.selectToken)).pipe(
      take(1)
    ).subscribe(token => this.token = token);
  }

  storeRecipes() {
    return this.http.put(this.baseURL + '/recipes.json?auth=' + this.token, this.recipeService.getRecipes());
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.baseURL + '/recipes.json?auth=' + this.token)
      .subscribe(
        (recipes: Recipe[]) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          this.recipeService.updateRecipes(recipes);
        }
      );
  }
}
