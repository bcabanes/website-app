import { Injectable } from '@angular/core';
import { PrismicService } from '../prismic/prismic.service';
import { Observable } from 'rxjs/Observable';
import { IPrismic } from '../prismic/query-result.model';
import { BlogPostDataInterface } from './blog-post.model';

import 'rxjs/add/operator/map';

@Injectable()
export class BlogPostService {

  constructor(private prismicService: PrismicService) {
  }

  getList(pageNumber: number = 1, pageSize: number = 20): Observable<BlogPostDataInterface[]> {
    return this.prismicService
      .getCustomType('blog-post', `[document.first_publication_date desc]`, pageSize, pageNumber)
      .map((response: IPrismic.PaginatedQueryResult) =>
        response.results.map(item =>
          ({ ...item.data[ 'blog-post' ], uid: item.uid })));
  }

  getByUID(blogPostUID: string): Observable<BlogPostDataInterface> {
    return this.prismicService.getByUID('blog-post', blogPostUID)
      .map((response: IPrismic.SingleQueryResult) =>
        ({ ...response.data[ 'blog-post' ], uid: response.uid }));
  }

}
