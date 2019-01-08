import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DefaultDetailComponent } from './recipes/recipe-detail/default-detail/default-detail.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: 'recipes', component: RecipesComponent, children:[
    {path: '', component: DefaultDetailComponent},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id/edit', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: '**', redirectTo: '/recipes'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
