import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../@core/utils/analytics.service';
import { SeoService } from '../@core/utils/seo.service';

@Component({
  selector: 'ngx-demo',
  template: '<router-outlet></router-outlet>'
})
export class DemoComponent implements OnInit {
  constructor(private analytics: AnalyticsService, private seoService: SeoService) {}

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
  }
}
