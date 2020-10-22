import { createAction, props } from '@ngrx/store';

export const GUARD_USER_PROFILE_FETCHED_SUCCESSED = '[guard] user profile fetched successed';
export const FETCH_MAIN_MENU = '[common] fetch main menu';
export const LOGOUT = '[common] logout';
export const LOGOUT_SUCCESSED = '[common] logout successed';
export const RELOAD = '[common] reload';

export const userProfileFetchedSuccessed = createAction(GUARD_USER_PROFILE_FETCHED_SUCCESSED, props<{ payload: any }>());
export const fetchMainMenu = createAction(FETCH_MAIN_MENU, props<{ payload: any }>());
export const logout = createAction(LOGOUT);
export const logoutSuccessed = createAction(LOGOUT_SUCCESSED);
export const reload = createAction(RELOAD);

export const SHOW_SPINNER = '[UI] Show loading spinner';
export const HIDE_SPINNER = '[UI] Hide loading spinner';
export const HIDE_ALL_SPINNER = '[UI] Hide all spinner';

export const ShowSpinner = createAction(SHOW_SPINNER, props<{ payload?: any }>());
export const HideSpinner = createAction(HIDE_SPINNER, props<{ payload?: any }>());
export const HideAllSpinner = createAction(HIDE_ALL_SPINNER, props<{ payload?: any }>());

export const HTTP_ERROR = '[ERROR] HTTP error';
export const HttpError = createAction(HTTP_ERROR, props<{ payload?: any; doNotDisplayMessage?: boolean }>());
