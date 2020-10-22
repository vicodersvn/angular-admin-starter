import { Action } from '@ngrx/store';

export const LOG_ERROR = '[Logger] Log Error';
export const LOG_WARNING = '[Logger] Log Warning';
export const LOG_INFO = '[Logger] Log Info';

export class LogError implements Action {
  readonly type = LOG_ERROR;
  constructor(readonly payload: { error: any }) {}
}

export class LogWarning implements Action {
  readonly type = LOG_WARNING;
  constructor(readonly payload: { error: string }) {}
}

export class LogInfo implements Action {
  readonly type = LOG_INFO;
  constructor(readonly payload: { error: string }) {}
}
