import { Action } from '@ngrx/store';

export const initialState: boolean = false;

export function reducer(state = initialState, action: Action): boolean {
  switch (action.type) {

    default:
      return state;
  }
}
