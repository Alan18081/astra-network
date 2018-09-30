import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromStore from '../../@store/index';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<fromStore.IAppState>
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(fromStore.getAuthLoggedStatus);
  }
}
