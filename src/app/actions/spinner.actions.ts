import { Action } from '@ngrx/store';

export enum SpinnerActionTypes {
  SpinnerAction = '[Spinner] Action'
}

export class Spinner implements Action {
  readonly type = SpinnerActionTypes.SpinnerAction;
}

export type SpinnerActions = Spinner;
