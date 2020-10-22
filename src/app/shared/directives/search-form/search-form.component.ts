import { OnDestroy, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, OnDestroy {
  navigationSubscription: any;
  public keyword = '';

  // @Output() searching: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeHolder: String = '';
  @Input() btnText: String = 'Search';

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {
    if (_.isUndefined(this.navigationSubscription)) {
      this.navigationSubscription = this.route.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
          if (!_.isUndefined(this.activatedRoute.snapshot.queryParams.search)) {
            this.keyword = _.trim(this.activatedRoute.snapshot.queryParams.search)
            ;
          } else {
            this.keyword = '';
          }
        }
      });
    }
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.navigationSubscription.unsubscribe();
  }

  onSubmit(): void {
    const url = window.location.pathname;
    let queryParams = this.activatedRoute.snapshot.queryParams;
    queryParams = _.assign({}, queryParams, { search: this.keyword });
    const params = _.assign({}, this.activatedRoute.snapshot.params, { queryParams });
    this.route.navigate([url], params);
  }
}
