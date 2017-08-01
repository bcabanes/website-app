import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { PrismicService } from '../prismic/prismic.service';

import { IPrismic } from '../prismic/query-result.model';
import { IEventPost } from './event.model';
import { IEventPostPaginationData } from './event-pagination.model';

@Injectable()
export class EventPostService {

  constructor(private prismicService: PrismicService) {
  }

  getList(pageNumber: number = 1, pageSize: number = 20): Observable<IEventPostPaginationData> {
    return this.prismicService
      .getCustomType('event-post', `[document.first_publication_date desc]`, pageSize, pageNumber)
      .map((response: IPrismic.PaginatedQueryResult) => {
        const data: IEventPost[] = response.results.map(item =>
          ({ ...item.data[ 'event-post' ], uid: item.uid }));

        return {
          data,
          currentPage: +response.page,
          totalPages : Array(response.total_pages).fill(0).map((x, i) => i)
        };
      });
  }

  getByUID(blogPostUID: string): Observable<IEventPost> {
    return this.prismicService.getByUID('event-post', blogPostUID)
      .map((response: IPrismic.SingleQueryResult) =>
        ({ ...response.data[ 'event-post' ], uid: response.uid }));
  }

}
