import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Store } from '@ngrx/store';
import { State } from '../store/reducers';
import { Subscription } from 'rxjs';
import { isUndefined, find } from 'lodash';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-master',
  template: `<ngx-spinner bdColor="rgba(0,0,0,0.3)" size="small" color="#fff" type="line-scale" [fullScreen]="true"></ngx-spinner><router-outlet></router-outlet>`
})
export class MasterComponent implements OnInit, OnDestroy {
  public data: string;
  private show_spinner_subscription: Subscription;
  private hide_spinner_subscription: Subscription;
  constructor(private store: Store<State>, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.show_spinner_subscription = this.store
      .pipe(filter((state) => state.global.spinner.active > 0 && !isUndefined(find(state.global.spinner.actionsInProgress, { useGlobalSpinner: true }))))
      .subscribe(() => {
        this.spinner.show();
      });
    this.hide_spinner_subscription = this.store
      .pipe(filter((state) => state.global.spinner.active === 0 || isUndefined(find(state.global.spinner.actionsInProgress, { useGlobalSpinner: true }))))
      .subscribe(() => {
        this.spinner.hide();
      });
  }
  ngOnDestroy() {
    if (!isUndefined(this.show_spinner_subscription)) {
      this.show_spinner_subscription.unsubscribe();
    }
    if (!isUndefined(this.hide_spinner_subscription)) {
      this.hide_spinner_subscription.unsubscribe();
    }
  }
}
