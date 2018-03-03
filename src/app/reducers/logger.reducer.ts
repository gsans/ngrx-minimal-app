import { ActionReducer, Action } from '@ngrx/store';
import { State } from './index';

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  console.log('logger reducer executes');
  return function(state: State, action: Action): State {
    console.log('internal logger reducer executes');
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
} 

export function meta(reducer: ActionReducer<State>): ActionReducer<State> {
  console.log('meta reducer executes');
  return function(state: State, action: Action): State {
    console.log('internal meta reducer executes');
    return reducer(state, action);
  };
} 