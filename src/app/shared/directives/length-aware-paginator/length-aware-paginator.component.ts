import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import * as _ from 'lodash';
import { Subscription, Subject } from 'rxjs';
import { Exception } from '../../Exceptions/Exception';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import LengthAwarePaginator from './LengthAwarePaginator';

@Component({
  selector: 'length-aware-paginator',
  templateUrl: './length-aware-paginator.component.html',
  styleUrls: ['./length-aware-paginator.component.scss']
})
export class LengthAwarePaginatorComponent implements OnInit, OnChanges, OnDestroy {
  navigationSubscription: Subscription;
  router: Router;
  @Input()
  label?: string = 'Page';
  @Input()
  ofLabel?: string = 'of';
  @Input()
  alwaysDisplay?: Boolean;
  @Input()
  pagination: LengthAwarePaginator;
  @Input()
  name: any = 'page';
  activeRoute: ActivatedRoute;
  public current_page = 1;
  public pages = [];
  public numberPageInBetween = 5;
  public pagesInBetween = [];
  public txtQuery: string;
  public txtQueryChanged: Subject<string> = new Subject<string>();

  constructor(router: Router, activeRoute: ActivatedRoute) {
    this.router = router;
    this.activeRoute = activeRoute;
    this.navigationSubscription = this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e: any) => {
      if (!_.isUndefined(this.activeRoute.snapshot.queryParams.page)) {
        this.current_page = Number(this.activeRoute.snapshot.queryParams.page);
      }
    });

    this.txtQueryChanged.pipe(debounceTime(1000), distinctUntilChanged()).subscribe((model) => {
      this.txtQuery = model;
    });
  }

  ngOnInit() {
    if (!_.isUndefined(this.activeRoute.snapshot.queryParams[this.name])) {
      this.current_page = Number(this.activeRoute.snapshot.queryParams[this.name]);
    }
  }

  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!_.isUndefined(this.pagination)) {
      const pages = [];
      const length = this.pagination.getTotalPages();
      for (let k = 1; k <= length; k++) {
        pages.push(k);
      }
      this.pages = pages;
      let newPagesInBetween = [];
      if (length - 2 > this.numberPageInBetween) {
        if (this.isHideLeftShowMore(this.current_page)) {
          for (let k = 2; k <= this.numberPageInBetween + 1; k++) {
            newPagesInBetween.push(k);
          }
        } else if (this.isHideRightShowMore(this.current_page)) {
          for (let k = length - this.numberPageInBetween; k <= length - 1; k++) {
            newPagesInBetween.push(k);
          }
        } else {
          if (this.pagesInBetween.indexOf(this.current_page) > -1) {
            newPagesInBetween = this.pagesInBetween;
          } else {
            for (let k = this.current_page; k <= this.current_page + this.numberPageInBetween - 1; k++) {
              newPagesInBetween.push(k);
            }
          }
        }
      } else {
        for (let k = 2; k <= length - 1; k++) {
          newPagesInBetween.push(k);
        }
      }
      this.pagesInBetween = newPagesInBetween;
    }
  }

  resolveParams(page, action?) {
    if (!_.isUndefined(action)) {
      if (action === 'prev') {
        const prevPage = page - 1;
        return _.assign({}, this.activeRoute.snapshot.queryParams, { [this.name]: prevPage });
      } else if (action === 'next') {
        const nextPage = page + 1;
        return _.assign({}, this.activeRoute.snapshot.queryParams, { [this.name]: nextPage });
      } else {
        throw new Exception('only "prev" or "next" action are allowed');
      }
    } else {
      return _.assign({}, this.activeRoute.snapshot.queryParams, { [this.name]: page });
    }
  }

  getCurrentPage() {
    return this.current_page;
  }

  isCurrentPage(page) {
    return page === this.current_page;
  }

  shouldActivePrev() {
    return this.current_page > 1;
  }

  shouldActiveNext() {
    return this.current_page < this.pagination.getTotalPages();
  }

  getCurrentUrl() {
    let segments = ['/'];
    this.activeRoute.snapshot.pathFromRoot.forEach((item) => {
      if (Array.isArray(item.url) && item.url.length > 0) {
        segments = [...segments, ...item.url.map((i) => i.path)];
      }
    });
    return segments;
  }

  isHideLeftShowMore(page) {
    if (this.pages.length - 2 < this.numberPageInBetween || page <= this.numberPageInBetween + 1) {
      return true;
    } else {
      return false;
    }
  }

  isHideRightShowMore(page) {
    if (!this.isHideLeftShowMore(page)) {
      if (this.pages.length - 2 < this.numberPageInBetween || page > this.pages.length - this.numberPageInBetween) {
        return true;
      } else {
        return false;
      }
    } else {
      if (this.pages.length - 2 < this.numberPageInBetween || page > this.numberPageInBetween + 1) {
        return true;
      } else {
        return false;
      }
    }
  }
  onFieldChange(query: string) {
    this.txtQueryChanged.next(query);
  }

  change() {
    const query_params = this.resolveParams(this.current_page);
    this.router.navigate(this.getCurrentUrl(), { queryParams: query_params });
  }
}
