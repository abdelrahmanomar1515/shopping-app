import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { AuthActions, AuthSelectors } from '../auth/store';
import { DataStorageService } from '../shared/data-storage.service';
import { AppState } from '../store/state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  constructor(
    private dataStorageService: DataStorageService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.isAuthenticated$ = this.store.pipe(
      select(AuthSelectors.selectIsAuthenticated),
      share()
    );
  }
  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }
  onSignout() {
    this.store.dispatch(AuthActions.attemptSignout());
  }
}
