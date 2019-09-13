import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '../store/state';
import { AuthSelectors } from './store';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.pipe(select(AuthSelectors.selectIsAuthenticated));
  }
}