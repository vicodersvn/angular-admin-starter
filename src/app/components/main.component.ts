import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectMenuItem } from '../store/selectors/common.selectors';
import MenuItem from '../models/MenuItem';
import { filter, takeUntil } from 'rxjs/operators';
import { BaseComponent } from './base.component';
import { map } from 'lodash-es';
import { fetchMainMenu } from '../store/actions';
import { MENU_ITEMS } from 'app/app-menu';

@Component({
  selector: 'app-main',
  styleUrls: ['main.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `
})
export class MainComponent extends BaseComponent implements OnInit {
  menu = [];
  constructor(private store: Store<any>) {
    super();
    this.store.dispatch(fetchMainMenu({ payload: MENU_ITEMS }));
    this.store
      .pipe(
        select(selectMenuItem),
        filter(({ fetched }) => fetched),
        takeUntil(this.ngDestroyed$)
      )
      .subscribe(({ items }) => {
        this.menu = map(items, (item) => new MenuItem(item));
      });
  }
  ngOnInit() {}
}
