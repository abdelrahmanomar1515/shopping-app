import { Recipe } from './recipe';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [
    new Recipe('First Recipe', 
    'Desc of my first recipe', 
    'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    [
        new Ingredient('Apples',3),
        new Ingredient('Tomatoes', 5)
    ]),
    new Recipe('Second Recipe', 
    'Desc of my first recipe', 
    'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
    [
        new Ingredient('Apples',2),
        new Ingredient('Tomatoes', 21)
    ]),
    ]
    
    getRecipes(){
        return this.recipes.slice()
    }

}