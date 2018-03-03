import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../reducers/index';
import { SpinnerShow } from '../actions/spinner.actions';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  loading: Observable<boolean>;
  @Input() target: string;
  @Input() color: string = "red";

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.loading = this.store.pipe(
      map(state => { 
        return state[this.target];
      })
    );
  }

}
