import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSpinner from './spinner.reducer';

export interface State {

  spinner: fromSpinner.State;
}

export const reducers: ActionReducerMap<State> = {

  spinner: fromSpinner.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
