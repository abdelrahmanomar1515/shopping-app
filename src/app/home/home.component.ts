import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthSelectors } from '../auth/store';
import { AppState } from '../store/state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isAuthenticated$ = this.store.pipe(
      select(AuthSelectors.selectIsAuthenticated)
    );
  }
}
