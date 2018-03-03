import { Action } from '@ngrx/store';

export enum SpinnerActionTypes {
  Show = '[Spinner] Show',
  Hide = '[Spinner] Hide'
}

export class SpinnerShow implements Action {
  readonly type = SpinnerActionTypes.Show;
  constructor(public payload: { target: string }) {}
}

export class SpinnerHide implements Action {
  readonly type = SpinnerActionTypes.Hide;
  constructor(public payload: { target: string }) {}
}

export type SpinnerActions = SpinnerShow | SpinnerHide;
