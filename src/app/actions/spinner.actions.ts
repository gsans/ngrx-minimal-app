import { Action } from '@ngrx/store';

export enum SpinnerActionTypes {
  Show = '[Spinner] Show',
  Hide = '[Spinner] Hide'
}

export class SpinnerShow implements Action {
  readonly type = SpinnerActionTypes.Show;
}

export class SpinnerHide implements Action {
  readonly type = SpinnerActionTypes.Show;
}

export type SpinnerActions = SpinnerShow | SpinnerHide;
