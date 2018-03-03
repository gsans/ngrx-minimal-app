import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromSpinner from './spinner.reducer';
import { logger, meta } from './logger.reducer';

export interface State {
  spinner: boolean;
}

export const reducers: ActionReducerMap<State> = {
  spinner: fromSpinner.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [meta, logger] : [];
