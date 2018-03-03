import { Action } from '@ngrx/store';
import { SpinnerActions, SpinnerActionTypes } from '../actions/spinner.actions';

export const initialState: boolean = false;

export function reducer(state = initialState, action: SpinnerActions): boolean {
  switch (action.type) {
    case SpinnerActionTypes.Show: 
      return true;
    case SpinnerActionTypes.Hide: 
      return false;  
    default:
      return state;
  }
}
