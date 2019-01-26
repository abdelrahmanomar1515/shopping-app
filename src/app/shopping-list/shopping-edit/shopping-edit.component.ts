import { Component, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Ingredient } from './../../shared/ingredient';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  shoppingListServiceSubscription : Subscription
  ingName: string
  ingAmount: number
  ingUnderEdit: number
  editMode = false
  @ViewChild('f') shoppingListForm: NgForm
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListServiceSubscription = this.shoppingListService.ingredientUnderEdit.subscribe(
      (i:number) => {
        this.ingUnderEdit = i
        this.ingName = this.shoppingListService.getIngredients()[i].name
        this.ingAmount = this.shoppingListService.getIngredients()[i].amount
        this.editMode = true
        this.shoppingListForm.setValue({
          name : this.ingName,
          amount: this.ingAmount
        })
      }
    )
  }
  onFormSubmit(form: NgForm){
    const newIng = new Ingredient(form.value.name,form.value.amount)
    if(this.editMode){
      const updatedIng = new Ingredient(form.value.name, form.value.amount)
      this.shoppingListService.updateIngredient(this.ingUnderEdit, updatedIng)
    } else{
      this.shoppingListService.addIngredient(newIng)
    }
    this.editMode = false
    this.shoppingListForm.reset()
  }
  onDeleteItem(index:number){
    this.shoppingListService.deleteIngredient(index)
    this.shoppingListForm.reset()
    this.editMode = false
  }
  onClear(){
    this.shoppingListForm.reset()
  }
  ngOnDestroy(){
    this.shoppingListServiceSubscription.unsubscribe()
  }

}
