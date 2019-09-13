import { Action, createReducer, on } from '@ngrx/store';
import { ShoppingListActions, ShoppingListState } from '.';
import { initialState } from './shopping-list.state';

const shoppingListReducer = createReducer(
  initialState,
  on(ShoppingListActions.addIngredient, (state, { ingredient }) => ({
    ...state,
    ingredients: [...state.ingredients, ingredient]
  })),
  on(ShoppingListActions.addIngredients, (state, { ingredients }) => ({
    ...state,
    ingredients: [...state.ingredients, ...ingredients]
  })),
  on(ShoppingListActions.updateIngredient, (state, { ingredient }) => {
    const oldIngredient = state.ingredients[state.editedIngredientIndex];
    const updatedIngredient = {
      ...oldIngredient,
      ...ingredient
    };
    const ingredients = [...state.ingredients];
    ingredients[state.editedIngredientIndex] = updatedIngredient;
    return {
      ...state,
      ingredients,
      editedIngredient: null,
      editedIngredientIndex: -1
    };
  }),
  on(ShoppingListActions.deleteIngredient, (state) => {
    const newIngredients = [...state.ingredients];
    newIngredients.splice(state.editedIngredientIndex, 1);
    return {
      ...state,
      ingredients: newIngredients,
      editedIngredient: null,
      editedIngredientIndex: -1
    };
  }),
  on(ShoppingListActions.startEdit, (state, { index }) => {
    const editedIngredient = { ...state.ingredients[index] };
    return {
      ...state,
      editedIngredient,
      editedIngredientIndex: index
    };
  }),
  on(ShoppingListActions.stopEdit, (state) => ({
    ...state,
    editedIngredientIndex: -1,
    editedIngredient: null
  })),
);

export function reducer(state: ShoppingListState.State, action: Action) {
  return shoppingListReducer(state, action);
}
