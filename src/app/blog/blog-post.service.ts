import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { PrismicService } from '../prismic/prismic.service';

import { IPrismic } from '../prismic/query-result.model';
import { IBlogPost } from './blog-post.model';
import { IBlogPostPaginationData } from './blog-post-pagination.model';

@Injectable()
export class BlogPostService {

  constructor(private prismicService: PrismicService) {
  }

  getList(pageNumber: number = 1, pageSize: number = 20): Observable<IBlogPostPaginationData> {
    return this.prismicService
      .getCustomType('blog-post', `[document.first_publication_date desc]`, pageSize, pageNumber)
      .map((response: IPrismic.PaginatedQueryResult) => {
        const data: IBlogPost[] = response.results.map(item =>
          ({ ...item.data[ 'blog-post' ], uid: item.uid }));

        return {
          data,
          currentPage: +response.page,
          totalPages : Array(response.total_pages).fill(0).map((x, i) => i)
        };
      });
  }

  getByUID(blogPostUID: string): Observable<IBlogPost> {
    return this.prismicService.getByUID('blog-post', blogPostUID)
      .map((response: IPrismic.SingleQueryResult) =>
        ({ ...response.data[ 'blog-post' ], uid: response.uid }));
  }

}
