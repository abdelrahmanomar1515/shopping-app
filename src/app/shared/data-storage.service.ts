import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe';

@Injectable()
export class DataStorageService {
  baseURL: string = 'https://my-ng-shopping-app.firebaseio.com'
  constructor(private http: HttpClient, private recipeService: RecipeService) { }
  storeRecipes(){
    return this.http.put(this.baseURL+'/recipes.json', this.recipeService.getRecipes())
  }
  fetchRecipes(){
    this.http.get<Recipe[]>(this.baseURL+'/recipes.json')
    .subscribe(
      (recipes: Recipe[]) =>{
        for (let recipe of recipes){
          if(!recipe['ingredients']){
            recipe['ingredients'] = []
          }
        }
        this.recipeService.updateRecipes(recipes)
        console.log(recipes)
      }
    )
  }
}
