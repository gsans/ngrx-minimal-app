import { ActionReducer, Action } from '@ngrx/store';
import { State } from './index';

export function meta(reducer: ActionReducer<State>): ActionReducer<State> {
  console.log('meta reducer executes');
  return function(state: State, action: Action): State {
    console.log('internal meta reducer executes');
    return reducer(state, action);
  };
} 