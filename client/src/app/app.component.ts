import {Component, OnInit} from '@angular/core';
import * as fromStore from './@store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';

  constructor(
    private readonly store: Store<fromStore.IAuthState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.GetUser());
  }
}
