import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { AuthSelectors } from 'src/app/auth/store';
import { AppState } from 'src/app/store/state';

@Component({
  selector: 'app-default-detail',
  templateUrl: './default-detail.component.html',
  styleUrls: ['./default-detail.component.css']
})
export class DefaultDetailComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isAuthenticated$ = this.store.pipe(
      select(AuthSelectors.selectIsAuthenticated),
      share()
    );
  }

}
