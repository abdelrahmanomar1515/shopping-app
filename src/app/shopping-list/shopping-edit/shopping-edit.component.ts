import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducers';
import * as ShoppingListActions from '../store/shopping-list.actions';
import { Ingredient } from './../../shared/ingredient';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  shoppingListSubscription: Subscription;
  ingName: string;
  ingAmount: number;
  ingUnderEdit: Ingredient;
  editMode = false;
  @ViewChild('f') shoppingListForm: NgForm;

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit() {
    this.shoppingListSubscription = this.store.select('shoppingList')
      .subscribe(shoppingList => {
        if (shoppingList.editedIngredientIndex > -1) {
          this.ingUnderEdit = shoppingList.editedIngredient;
          this.editMode = true;
          this.shoppingListForm.setValue({
            name: this.ingUnderEdit.name,
            amount: this.ingUnderEdit.amount
          });
        } else {
          this.editMode = false;
        }
      });
  }
  onFormSubmit(form: NgForm) {
    const newIng = new Ingredient(form.value.name, form.value.amount);
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ ingredient: newIng }));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIng));
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }
  onDeleteItem() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient())
    this.shoppingListForm.reset();
    this.editMode = false;
  }
  onClear() {
    this.shoppingListForm.reset();
  }
  ngOnDestroy() {
    this.shoppingListSubscription.unsubscribe();
  }

}
