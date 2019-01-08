import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]
  private shoppingListServiceSubscription: Subscription
  constructor(private shoppingListService: ShoppingListService) { }

  onEditIngredient(i: number){
    this.shoppingListService.ingredientUnderEdit.next(i)
  }
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.shoppingListServiceSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      }
    )
  }
  onDestroy(){
    this.shoppingListServiceSubscription.unsubscribe()
  }

}
