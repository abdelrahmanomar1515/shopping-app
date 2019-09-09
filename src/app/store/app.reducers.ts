import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';


export interface State {
  shoppingList: fromShoppingList.State,
}

export const reducers: ActionReducerMap<State> = {
  shoppingList: fromShoppingList.shoppingListRreducers
};