import { ApiUrl } from './api-url.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Inject } from '@angular/core';

export class BaseService {
  public url = '';
  public http: HttpClient;
  public apiUrl: ApiUrl;

  constructor(@Inject(HttpClient) http: HttpClient, @Inject(ApiUrl) apiUrl: ApiUrl) {
    this.http = http;
    this.apiUrl = apiUrl;
  }
  /**
   * Get list of all resource with pagination
   *
   * @param param Optinal
   *
   * @return Observable
   */
  get(params?: {}, options: { showLoader: Boolean } = { showLoader: true }): Observable<any> {
    const queryParams = new HttpParams({ fromObject: params });
    return this.http.get(this.apiUrl.getApiUrl(this.url), { params: queryParams }).pipe(
      map((result: any) =>
        _.assign(
          {},
          {
            items: result.data,
            pagination: result.meta.pagination
          }
        )
      ),
      catchError(error => {
        throw error;
      })
    );
  }

  /**
   * Get list of all resource
   *
   * @param params Optional
   *
   * @return Observable
   */
  list(params?: {}, options: { showLoader: Boolean } = { showLoader: true }): Observable<any> {
    return this.http.post(this.apiUrl.getApiUrl(`${this.url}/list`), params).pipe(
      map((result: any) => result.data),
      catchError(error => {
        throw error;
      })
    );
  }

  /**
   * Update resource by given id
   *
   * @param Object
   *
   * @return Observable
   */
  update(id, data, options: { showLoader: Boolean } = { showLoader: true }): Observable<any> {
    return this.http.put(this.apiUrl.getApiUrl(this.url) + '/' + id, data).pipe(
      map((result: any) => result.data),
      catchError(error => {
        throw error;
      })
    );
  }

  /**
   * Delete resource by given id
   *
   * @param id
   *
   * @return Observable
   */
  delete(id, options: { showLoader: Boolean } = { showLoader: true }): Observable<any> {
    return this.http.delete(this.apiUrl.getApiUrl(this.url) + '/' + id).pipe(
      map((result: any) => result.data),
      catchError(error => {
        throw error;
      })
    );
  }

  create(data, options: { showLoader: Boolean } = { showLoader: true }): Observable<any> {
    return this.http.post(this.apiUrl.getApiUrl(this.url), data).pipe(
      map((result: any) => result.data),
      catchError(error => {
        throw error;
      })
    );
  }

  show(id, params?: {}, options: { showLoader: Boolean } = { showLoader: true }): Observable<any> {
    const queryParams = new HttpParams({ fromObject: params });
    return this.http.get(this.apiUrl.getApiUrl(this.url) + '/' + id, { params: queryParams }).pipe(
      map((result: any) => result.data),
      catchError(error => {
        throw error;
      })
    );
  }
}
