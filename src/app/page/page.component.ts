import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
// app
import { ContentfulService } from '../contentful/contentful.service';
import { PageModel } from './page.model';

@Component({
  selector: 'app-page',
  template: `
    <div class="page-container">
      <app-page-detail [page]="page$ | async"></app-page-detail>
    </div>
    <!-- /.page-container -->
  `,
  styles: [`
    .page-container { margin: 100px 0; }
  `]
})
export class PageComponent implements OnInit {
  page$: Observable<PageModel>;

  constructor(private contentfulService: ContentfulService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.page$ = this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.contentfulService.getContentList('page')
          .map(pageList => pageList.filter(page => page.slug === params.get('page-slug')))
          .map(pageList => pageList.shift()));
  }
}
