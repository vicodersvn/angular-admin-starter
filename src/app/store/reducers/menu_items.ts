import { fetchMainMenu, logoutSuccessed } from '../actions';
import { Action, createReducer, on } from '@ngrx/store';

export const key = 'menu_items';

export interface State {
  fetched: Boolean;
  items: any;
}

export const initialState: State = {
  fetched: false,
  items: []
};

const _reducer = createReducer(
  initialState,
  on(fetchMainMenu, (state, action) => ({ ...state, ...{ fetched: true, items: action.payload } })),
  on(logoutSuccessed, () => ({ ...{}, ...initialState }))
);

export function reducer(state: State | undefined, action: Action) {
  return _reducer(state, action);
}
