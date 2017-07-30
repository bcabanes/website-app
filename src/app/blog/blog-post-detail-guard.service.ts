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
import { getBlogPostList } from './ngrx/blog-post.selector';

@Injectable()
export class BlogPostDetailGuardService implements CanActivate {

  constructor(private blogPostService: BlogPostService,
              private router: Router,
              private store: Store<IAppState>) {
  }

  hasBlogPostInStore(uid: string): Observable<boolean> {
    return this.store.select(getBlogPostList)
      .map(blogPostList => !!blogPostList.get(uid))
      .take(1);
  }

  hasBlogPostInApi(uid: string): Observable<boolean> {
    this.store.dispatch(new BlogPostActions.FetchAction());

    return this.blogPostService.getByUID(uid)
      .map(data => new BlogPostActions.AddItemAction(data))
      .do(action => this.store.dispatch(action))
      .map(_ => true)
      .catch(error => {
        console.error(error);
        this.router.navigate([ '/404' ]);
        return Observable.of(false);
      });
  }

  hasBlogPost(uid: string): Observable<boolean> {
    return this.hasBlogPostInStore(uid)
      .switchMap(inStore => {
        if (inStore) {
          return Observable.of(inStore);
        }
        return this.hasBlogPostInApi(uid);
      });
  }

  canActivate(route: ActivatedRouteSnapshot) {
    return this.hasBlogPost(route.params[ 'uid' ]);
  }
}
