import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

import { EventPostService } from './event-post.service';
import { IAppState } from '../ngrx/index';
import { EventPostActions } from './ngrx/event-post.action';
import { getEventPostList } from './ngrx/event-post.selector';

@Injectable()
export class EventPostDetailGuardService implements CanActivate {

  constructor(private eventPostService: EventPostService,
              private router: Router,
              private store: Store<IAppState>) {
  }

  hasEventPostInStore(uid: string): Observable<boolean> {
    return this.store.select(getEventPostList)
      .map(blogPostList => !!blogPostList.get(uid))
      .take(1);
  }

  hasEventPostInApi(uid: string): Observable<boolean> {
    this.store.dispatch(new EventPostActions.FetchAction());

    return this.eventPostService.getByUID(uid)
      .map(data => new EventPostActions.AddItemAction(data))
      .do(action => this.store.dispatch(action))
      .map(_ => true)
      .catch(error => {
        console.error(error);
        this.router.navigate([ '/404' ]);
        return Observable.of(false);
      });
  }

  hasEventPost(uid: string): Observable<boolean> {
    return this.hasEventPostInStore(uid)
      .switchMap(inStore => {
        if (inStore) {
          return Observable.of(inStore);
        }
        return this.hasEventPostInApi(uid);
      });
  }

  canActivate(route: ActivatedRouteSnapshot) {
    return this.hasEventPost(route.params[ 'uid' ]);
  }
}
