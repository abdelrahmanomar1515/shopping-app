import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ingredient } from '../shared/ingredient';
import { State } from '../store/state';
import { ShoppingListActions, ShoppingListSelectors } from './store';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients$: Observable<Ingredient[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.ingredients$ = this.store.pipe(
      select(ShoppingListSelectors.selectShoppingListIngredients)
    );
  }
  onEditIngredient(i: number) {
    this.store.dispatch(ShoppingListActions.startEdit({ index: i }));
  }
}
