import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './reducers/index';
import { SpinnerShow } from './actions/spinner.actions';

@Component({
  selector: 'app-root',
  template: `
    <app-loading target="spinner-top" color="red"></app-loading>
    <app-loading target="spinner-bottom" color="black"></app-loading>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.store.dispatch(new SpinnerShow({ target: "spinner-top" }));
    this.store.dispatch(new SpinnerShow({ target: "spinner-bottom" }));
  }
}
