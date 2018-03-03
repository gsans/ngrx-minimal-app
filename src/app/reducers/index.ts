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
import { namedReducer } from './named.reducer';

export interface State {
  "spinner-top" : boolean;
  "spinner-bottom" : boolean;
}

export const reducers: ActionReducerMap<State> = {
  "spinner-top": namedReducer(fromSpinner.reducer, "spinner-top"),
  "spinner-bottom": namedReducer(fromSpinner.reducer, "spinner-bottom"),
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [meta, logger] : [];
