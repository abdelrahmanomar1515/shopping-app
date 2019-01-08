import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
import { Subject } from 'rxjs';

export class RecipeService{
    recipesChanged = new Subject<Recipe[]>()
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
    getRecipeById(id: number){
        return this.recipes[id]
    }
    addRecipe(newRecipe: Recipe){
        this.recipes.push(newRecipe)
        this.recipesChanged.next(this.recipes.slice())
    }
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe
        this.recipesChanged.next(this.recipes.slice())
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1)
        this.recipesChanged.next(this.recipes.slice())
    }

}