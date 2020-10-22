import { isUndefined, find, pick } from 'lodash';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap, map, filter, withLatestFrom, concatMap } from 'rxjs/operators';
import { RELOAD, ShowSpinner, HideSpinner, HTTP_ERROR, HideAllSpinner } from '../actions';
import { isPlatformBrowser } from '@angular/common';
import { LOG_ERROR } from '../../shared/Logger/logger.actions';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers';
import { of } from 'rxjs';

@Injectable()
export class CommonEffects {
  public items = [];

  reload$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RELOAD),
        tap(() => {
          if (isPlatformBrowser(this.platformId)) window.location.href = window.location.href;
        })
      ),
    { dispatch: false }
  );

  showLoader$ = createEffect(() =>
    this.actions$.pipe(
      filter((action: any) => (action && action.displayLoader === true ? action : null)),
      map((action: any) => ShowSpinner({ payload: pick(action, ['type', 'useGlobalSpinner']) }))
    )
  );

  hideLoader$ = createEffect(() =>
    this.actions$.pipe(
      filter((action: any) => (action && action.hideLoaderOf ? action : null)),
      map((action: any) => HideSpinner({ payload: pick(action, ['type']) }))
    )
  );

  catchError$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HTTP_ERROR, LOG_ERROR),
      tap((action: any) => {
        if (action && action.payload && action.payload.error) {
          this.notification.show('warning', action.payload.error.message, 5000);
        }
      }),

      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(this.store$.pipe(select((state) => state.global.spinner.active && !isUndefined(find(state.global.spinner.actionsInProgress, { useGlobalSpinner: true })))))
        )
      ),
      filter(([action, is_spinner_active]) => action && is_spinner_active),
      map(([action]) => HideAllSpinner(action))
    )
  );

  constructor(private actions$: Actions, private store$: Store<State>, @Inject(PLATFORM_ID) private platformId: object, @Inject('Notification') private notification) {}
}
