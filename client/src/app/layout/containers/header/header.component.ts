import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as fromStore from '../../../@store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/index';
import {IUser} from '../../../helpers/models/user.model';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuClicked = new EventEmitter<boolean>();
  userInfo$: Observable<IUser>;

  constructor(
    private readonly store: Store<fromStore.IAppState>
  ) {}

  ngOnInit() {
    this.userInfo$ = this.store.select(fromStore.getAuthUserInfo);
  }

  onClick() {
    this.menuClicked.emit();
  }

  getFullName(): Observable<string> {
    return this.userInfo$.pipe(
      map((info: IUser) => {
        return `${info.firstName} ${info.lastName}`;
      })
    )
  }
}
