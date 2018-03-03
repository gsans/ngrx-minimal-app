import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../reducers/index';
import { SpinnerShow } from '../actions/spinner.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  loading: Observable<boolean>;

  constructor(private store: Store<fromStore.State>) { 
    this.store.dispatch(new SpinnerShow());
  }

  ngOnInit() {
    this.loading = this.store.select('spinner');
  }

}
