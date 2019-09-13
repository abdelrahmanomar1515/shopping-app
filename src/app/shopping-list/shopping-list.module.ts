import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { StoreModule } from '@ngrx/store';
import * as ShoppingListReducers from './store/shopping-list.reducers';
import { shoppingListFeatureKey } from '../store/state';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(shoppingListFeatureKey, ShoppingListReducers.reducer)
  ]
})
export class ShoppingListModule { }
