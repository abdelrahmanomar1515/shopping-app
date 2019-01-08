import { Ingredient } from '../shared/ingredient';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>()
  ingredientUnderEdit = new Subject<number>()

  private ingredients: Ingredient[] = [
    new Ingredient('Onions', 2),
    new Ingredient('Tomatoes', 5)
  ]
  
  getIngredients(){
    return this.ingredients.slice()
  }
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  updateIngredient(i:number, newIngredient: Ingredient){
    this.ingredients[i] = newIngredient
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  deleteIngredient(index: number){
    this.ingredients.splice(index,1)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  constructor() { }
}
