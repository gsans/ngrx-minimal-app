import { ActionReducer } from '@ngrx/store';
import { SpinnerActions } from '../actions/spinner.actions';

export function namedReducer(reducer: ActionReducer<boolean, SpinnerActions>, target: string): ActionReducer<boolean, SpinnerActions> {
  return (state: boolean, action: SpinnerActions) => {
    // ignore action and pass forward
    if (action.payload && action.payload.target != target)
      return state;
    // otherwise use original reducer
    return reducer(state, action);
  }
}