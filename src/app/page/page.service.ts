import { Injectable } from '@angular/core';
import { PrismicService } from '../prismic/prismic.service';
import { Observable } from 'rxjs/Observable';
import { IPrismic } from '../prismic/query-result.model';
import { PageDataInterface } from './page.model';

import 'rxjs/add/operator/map';

@Injectable()
export class PageService {

  constructor(private prismicService: PrismicService) {
  }

  getAll(): Observable<PageDataInterface[]> {
    return this.prismicService.getCustomType('page')
      .map((response: IPrismic.PaginatedQueryResult) =>
        response.results.map(page =>
          ({ ...page.data[ 'page' ], seo_title: page.uid })));
  }

  getByUID(pageUID: string): Observable<PageDataInterface> {
    return this.prismicService.getByUID('page', pageUID)
      .map((response: IPrismic.SingleQueryResult) =>
        ({ ...response.data[ 'page' ], seo_title: response.uid }));
  }

}
