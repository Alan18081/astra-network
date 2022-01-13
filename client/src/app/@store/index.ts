import * as fromAuth from './auth';
import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from './state';

export const reducers: ActionReducerMap<IAppState> = {
  auth: fromAuth.reducer
};

export const effects: any = [fromAuth.AuthEffects];

export * from './auth';
export * from './notes';
export * from './state';
