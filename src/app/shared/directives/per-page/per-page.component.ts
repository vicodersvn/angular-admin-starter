import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'per-page',
  templateUrl: './per-page.component.html',
  styleUrls: ['./per-page.component.scss']
})
export class PerPageComponent implements OnInit, OnDestroy {
  navigationSubscription: Subscription;
  public limits: Number[] = [5, 10, 20, 50, 100, 200, 500];
  @Input() perPage?: Number = 20;
  @Input() name?: any;
  @Input() label?: string = 'View';
  public page_query_param_key: string;

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {
    this.navigationSubscription = this.route.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e: any) => {
      const name = this.name || 'per_page';
      if (!_.isUndefined(this.activatedRoute.snapshot.queryParams[name])) {
        this.perPage = Number(this.activatedRoute.snapshot.queryParams[name]);
        if (!_.includes(this.limits, this.perPage)) {
          this.limits.push(this.perPage);
        } else {
          this.limits = [5, 10, 20, 100];
        }
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (!_.isUndefined(this.navigationSubscription)) {
      this.navigationSubscription.unsubscribe();
    }
  }

  updateLimit() {
    const name = this.name || 'per_page';
    const page = this.page_query_param_key || 'page';
    const url = window.location.pathname;
    let queryParams = this.activatedRoute.snapshot.queryParams;
    const data: any = {};
    data[name] = this.perPage;
    data[page] = 1;
    queryParams = _.assign({}, queryParams, data);
    const params = _.assign({}, this.activatedRoute.snapshot.params, {
      queryParams
    });
    this.route.navigate([url], params);
  }
}
