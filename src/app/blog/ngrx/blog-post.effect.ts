import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

import { handleNavigation } from '../../ngrx/helper';
import { BlogPostActions } from './blog-post.action';
import { BlogPostService } from '../blog-post.service';
import { IAppState } from '../../ngrx/index';

@Injectable()
export class BlogPostEffect {

  @Effect() navigateToBlogPostList$: Observable<Action> =
    handleNavigation(this.actions$, this.store, 'blog', (route: ActivatedRouteSnapshot) => {
      return Observable.of(new BlogPostActions.LoadAction());
    });

  /**
   * TODO: Handle Pagination using queryParams?
   */
  @Effect() postList$: Observable<Action> = this.actions$
    .ofType(BlogPostActions.ActionTypes.LOAD)
    .switchMap((a: any) => {
      return this.blogPostService.getList()
        .map(data => {
          return new BlogPostActions.ChangedAction(data);
        });
    });

  constructor(private actions$: Actions,
              private blogPostService: BlogPostService,
              private store: Store<IAppState>) {
  }
}
