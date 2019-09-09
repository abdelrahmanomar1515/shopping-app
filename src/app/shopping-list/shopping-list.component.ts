import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ingredient } from '../shared/ingredient';
import * as fromApp from './../store/app.reducers';
import * as ShoppingListActions from './store/shopping-list.actions';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients$: Observable<Ingredient[]>;

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit() {
    this.ingredients$ = this.store.select('shoppingList').pipe(
      map(shoppingList => shoppingList.ingredients)
    );
  }
  onEditIngredient(i: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(i));
  }
}
