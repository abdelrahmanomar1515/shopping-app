import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { State } from 'src/app/store/state';
import { ShoppingListActions, ShoppingListSelectors } from '../store';
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

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.shoppingListSubscription = this.store.pipe(
      select(ShoppingListSelectors.selectShoppingListState)
    )
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
      this.store.dispatch(ShoppingListActions.updateIngredient({ ingredient: newIng }));
    } else {
      this.store.dispatch(ShoppingListActions.addIngredient({ ingredient: newIng }));
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }
  onDeleteItem() {
    this.store.dispatch(ShoppingListActions.deleteIngredient())
    this.shoppingListForm.reset();
    this.editMode = false;
  }
  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }
  ngOnDestroy() {
    this.shoppingListSubscription.unsubscribe();
  }

}
