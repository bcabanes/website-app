import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

import { BlogPostService } from './blog-post.service';
import { IAppState } from '../ngrx/index';
import { BlogPostActions } from './ngrx/blog-post.action';
import { getEntitiesByPage } from './ngrx/blog-post.selector';

@Injectable()
export class BlogPostListGuardService implements CanActivate {

  constructor(private blogPostService: BlogPostService,
              private router: Router,
              private store: Store<IAppState>) {
  }

  hasBlogPostListInStore(pageNumber: number): Observable<boolean> {
    return this.store.select(getEntitiesByPage)
      .map(entityList => !!entityList.get(pageNumber))
      .take(1);
  }

  hasBlogPostListInApi(pageNumber: number): Observable<boolean> {
    this.store.dispatch(new BlogPostActions.FetchAction());

    return this.blogPostService.getList(pageNumber)
      .map(data => new BlogPostActions.AddPaginatedItemListAction(data))
      .do(action => this.store.dispatch(action))
      .map(_ => true)
      .catch(error => {
        console.error(error);
        this.router.navigate([ '/404' ]);
        return Observable.of(false);
      });
  }

  hasBlogPostList(pageNumber: number): Observable<boolean> {
    return this.hasBlogPostListInStore(pageNumber)
      .switchMap(inStore => {
        if (inStore) {
          this.store.dispatch(new BlogPostActions.UpdatePaginationAction(pageNumber));
          return Observable.of(inStore);
        }
        return this.hasBlogPostListInApi(pageNumber);
      });
  }

  canActivate(route: ActivatedRouteSnapshot) {
    return this.hasBlogPostList(+route.params[ 'pageNumber' ] || 1);
  }
}
