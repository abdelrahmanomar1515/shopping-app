import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ShoppingListState } from '.';
import { shoppingListFeatureKey } from 'src/app/store/state';

export const selectShoppingListState = createFeatureSelector<ShoppingListState.State>(shoppingListFeatureKey);

export const selectShoppingListIngredients = createSelector(
    selectShoppingListState,
    (state: ShoppingListState.State) => state.ingredients
);
