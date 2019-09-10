import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../../store/state';
import { ShoppingListState } from './shopping-list.state';

export const selectShoppingListState = createFeatureSelector<State, ShoppingListState>('shoppingList');

export const selectShoppingListIngredients = createSelector(
    selectShoppingListState,
    (state: ShoppingListState) => state.ingredients
);