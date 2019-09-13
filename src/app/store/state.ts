import { ShoppingListState } from '../shopping-list/store';
import { AuthState } from '../auth/store';

export interface AppState {
    shoppingList: ShoppingListState.State;
    auth: AuthState.State;
}

export const shoppingListFeatureKey = 'shoppingList';
