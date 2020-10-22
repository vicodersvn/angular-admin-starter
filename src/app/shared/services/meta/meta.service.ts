import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { assign } from 'lodash';
import { UpdateMetaDataParams } from './update-meta-data-param';
import { BaseService } from '../api/base.service';
@Injectable()
export class MetaService extends BaseService {
  public url = '/api/v1/meta';
  public metaTemplateUrl = '/api/v1/meta-templates';

  /**
   * Get list of meta template
   *
   * @param param Optinal
   *
   * @return Observable
   */
  getAllMetaTemplate(params?: {}): Observable<any> {
    const queryParams = new HttpParams({ fromObject: params });
    return this.http.get(this.apiUrl.getApiUrl(`${this.metaTemplateUrl}/all`), { params: queryParams }).pipe(
      map((result: any) => result.data),
      catchError((error) => {
        throw error;
      })
    );
  }

  /**
   * Get list of meta template
   *
   * @param param Optinal
   *
   * @return Observable
   */
  getAllMetaData(metableType: string, metableId: number | string, metaKeys: string[]): Observable<any> {
    const queryParams = new HttpParams({ fromObject: { type: metableType, id: metableId.toString(), keys: metaKeys.join(',') } });
    return this.http.get(this.apiUrl.getApiUrl(`${this.url}/all`), { params: queryParams }).pipe(
      map((result: any) => result.data),
      catchError((error) => {
        throw error;
      })
    );
  }

  /**
   * Get list of meta template
   *
   * @param param Optinal
   *
   * @return Observable
   */
  getMetaTemplate(params?: {}): Observable<any> {
    const queryParams = new HttpParams({ fromObject: params });
    return this.http.get(this.apiUrl.getApiUrl(this.metaTemplateUrl), { params: queryParams }).pipe(
      map((result: any) =>
        assign(
          {},
          {
            items: result.data,
            pagination: result.meta.pagination
          }
        )
      ),
      catchError((error) => {
        throw error;
      })
    );
  }

  /**
   * Create meta template item with given params
   * @param meta_template_id number
   * @param params
   */

  createMetaTemplate(params: {}): Observable<any> {
    return this.http.post(this.apiUrl.getApiUrl(this.metaTemplateUrl), params).pipe(
      map((result: any) => result.data),
      catchError((error) => {
        throw error;
      })
    );
  }

  /**
   * update meta data item with given params
   * @param meta_template_id number
   * @param params
   */
  updateMetaData(metableType: string, metableId: number, items: any[]): Observable<any> {
    const params: UpdateMetaDataParams = { meta: items.map((i) => ({ metable_type: metableType, metable_id: metableId, type: i.type, key: i.key, value: i.value })) };
    return this.http.put(this.apiUrl.getApiUrl(this.url), params).pipe(
      map((result: any) => result.data),
      catchError((error) => {
        throw error;
      })
    );
  }

  /**
   * Create meta template item with given params
   * @param meta_template_id number
   * @param params
   */

  createMetaTemplateItem(meta_template_id: number, params: {}): Observable<any> {
    return this.http.post(this.apiUrl.getApiUrl(`${this.metaTemplateUrl}/${meta_template_id}/items`), params).pipe(
      map((result: any) => result.data),
      catchError((error) => {
        throw error;
      })
    );
  }

  /**
   * Update meta template item with given params
   * @param meta_template_id number
   * @param meta_template_item_id number
   * @param params
   */

  updateMetaTemplateItem(meta_template_id: number, meta_template_item_id: number, params: {}): Observable<any> {
    return this.http.put(this.apiUrl.getApiUrl(`${this.metaTemplateUrl}/${meta_template_id}/items/${meta_template_item_id}`), params).pipe(
      map((result: any) => result.data),
      catchError((error) => {
        throw error;
      })
    );
  }

  /**
   * Delete meta template item
   *
   * @param meta_template_id number
   * @param meta_template_item_id number
   */

  deleteMetaTemplateItem(meta_template_id: number, meta_template_item_id: number): Observable<any> {
    return this.http.delete(this.apiUrl.getApiUrl(`${this.metaTemplateUrl}/${meta_template_id}/items/${meta_template_item_id}`)).pipe(
      map((result: any) => result.data),
      catchError((error) => {
        throw error;
      })
    );
  }

  /**
   * Delete meta template
   *
   * @param meta_template_id number
   */

  deleteMetaTemplate(meta_template_id: number): Observable<any> {
    return this.http.delete(this.apiUrl.getApiUrl(`${this.metaTemplateUrl}/${meta_template_id}`)).pipe(
      map((result: any) => result.data),
      catchError((error) => {
        throw error;
      })
    );
  }
}
