import { ActionReducerMap, MetaReducer, ActionReducer, createReducer, Action, on } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../../environments/environment';
import * as menu_items from './menu_items';
import { ShowSpinner, HideSpinner, HTTP_ERROR, HideAllSpinner } from '../actions';

export function logger(reducer: ActionReducer<{}>): any {
  return storeLogger()(reducer);
}

export interface GlobalState {
  spinner: { active: number; actionsInProgress: any[] };
}
const initState: GlobalState = {
  spinner: {
    active: 0,
    actionsInProgress: []
  }
};

const _global_reducer = createReducer(
  initState,
  on(ShowSpinner, (state: any, action: any) => {
    const isActionAlreadyInProgress = state.spinner.actionsInProgress.filter((currentAction: any) => currentAction === action.payload.type).length;
    if (isActionAlreadyInProgress) {
      return state;
    }
    const newActionsInProgress = [...state.spinner.actionsInProgress, { type: action.payload.type, useGlobalSpinner: action.payload.useGlobalSpinner }];
    return {
      ...state,
      ...{
        spinner: {
          active: newActionsInProgress.length,
          actionsInProgress: newActionsInProgress
        }
      }
    };
  }),
  on(HideSpinner, (state: any, action: any) => {
    if (action && action.payload && action.payload.type === HTTP_ERROR) {
      return { ...state, ...{ spinner: { active: 0, actionsInProgress: [] } } };
    }
    const newActionsInProgress = action.hideLoaderOf
      ? state.spinner.actionsInProgress.filter((currentAction: any) => currentAction.type !== action.payload.hideLoaderOf)
      : state.spinner.actionsInProgress;
    return {
      ...state,
      ...{
        spinner: {
          actionsInProgress: newActionsInProgress,
          active: state.active > 0 ? newActionsInProgress.length : 0
        }
      }
    };
  }),
  on(HideAllSpinner, (state: any, action: any) => {
    return {
      ...state,
      ...{
        spinner: {
          actionsInProgress: [],
          active: state.active > 0
        }
      }
    };
  })
);

export function global_reducer(state: GlobalState | undefined, action: Action) {
  return _global_reducer(state, action);
}

export interface State {
  global: GlobalState;
  [menu_items.key]: menu_items.State;
}

export const reducers: ActionReducerMap<State> = {
  global: global_reducer,
  [menu_items.key]: menu_items.reducer
};

export const metaReducers: MetaReducer<{}>[] = !environment.production ? [logger] : [];
