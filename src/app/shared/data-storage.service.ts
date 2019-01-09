import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  baseURL: string = 'https://my-ng-shopping-app.firebaseio.com'

  constructor(private http: HttpClient, 
    private recipeService: RecipeService,
    private authService: AuthService) { }
  storeRecipes(){
    let token: string = this.authService.getToken()
    return this.http.put(this.baseURL+'/recipes.json?auth=' + token, this.recipeService.getRecipes())
  }
  fetchRecipes(){
    let token: string = this.authService.getToken()
    this.http.get<Recipe[]>(this.baseURL+'/recipes.json?auth=' + token)
    .subscribe(
      (recipes: Recipe[]) =>{
        for (let recipe of recipes){
          if(!recipe['ingredients']){
            recipe['ingredients'] = []
          }
        }
        this.recipeService.updateRecipes(recipes)
      }
    )
  }
}
