import { ErrorHandler } from '@angular/core';
import { environment } from '../../../environments/environment';

export class ExceptionHandler implements ErrorHandler {
  handleError(error) {
    if (!environment.production) {
      console.error(error);
    }
  }
}
