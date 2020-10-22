import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base-component',
  template: ` <h1>Base Component</h1> `
})
export class BaseComponent implements OnDestroy {
  public ngDestroyed$ = new Subject();

  ngOnDestroy() {
    this._ngOnDestroy();
  }

  private _ngOnDestroy() {
    this.ngDestroyed$.next();
  }
}
