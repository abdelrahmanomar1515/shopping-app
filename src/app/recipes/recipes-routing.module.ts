import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultDetailComponent } from './recipe-detail/default-detail/default-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';

const recipesRoutes: Routes = [  
  {path: '', component: RecipesComponent, children: [
    {path: '', component: DefaultDetailComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    {path: ':id/edit', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent, canActivate: [AuthGuard]},
  ]},
]
@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})

export class RecipesRoutingModule {}