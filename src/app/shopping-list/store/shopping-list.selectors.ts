import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../store/state';
import { ShoppingListState } from '.';

export const selectShoppingListState = createFeatureSelector<AppState, ShoppingListState.State>('shoppingList');

export const selectShoppingListIngredients = createSelector(
    selectShoppingListState,
    (state: ShoppingListState.State) => state.ingredients
);