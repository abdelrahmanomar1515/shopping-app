import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import * as AuthReducers from './store/auth.reducers';
import { authFeatureKey } from './store/auth.state';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        StoreModule.forFeature(authFeatureKey, AuthReducers.reducer),
        EffectsModule.forFeature([AuthEffects])
    ]
})

export class AuthModule { }
