import { ActivatedRoute } from '@angular/router';
import { keys, assign, pick, isNil } from 'lodash-es';
export class QueryParser {
  all(activatedRoute?: ActivatedRoute): object {
    return activatedRoute.snapshot.queryParams;
  }

  parse(supportedParams: string[], activatedRoute?: ActivatedRoute): object {
    activatedRoute = activatedRoute;
    let queryParams = { page: 1 };
    if (keys(activatedRoute.snapshot.queryParams).length > 0) {
      queryParams = assign(queryParams, activatedRoute.snapshot.queryParams);
    }
    return pick(queryParams, supportedParams);
  }

  /**
   * get value of a router param
   *
   * @param key string
   * @param activatedRoute ActivatedRoute
   */

  get(key, activatedRoute?: ActivatedRoute): String {
    activatedRoute = activatedRoute;
    return activatedRoute.snapshot.params[key];
  }

  /**
   * Dertermine a router param is existing
   *
   * @param key string
   * @param activatedRoute ActivatedRoute
   */
  has(key, activatedRoute?: ActivatedRoute): Boolean {
    activatedRoute = activatedRoute;
    return !isNil(activatedRoute.snapshot.params[key]) && activatedRoute.snapshot.params[key] === '';
  }
}
