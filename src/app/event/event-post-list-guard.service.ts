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
import { getEntitiesByPage } from './ngrx/event-post.selector';

@Injectable()
export class EventPostListGuardService implements CanActivate {

  constructor(private eventPostService: EventPostService,
              private router: Router,
              private store: Store<IAppState>) {
  }

  hasEventPostListInStore(pageNumber: number): Observable<boolean> {
    return this.store.select(getEntitiesByPage)
      .map(entityList => !!entityList.get(pageNumber))
      .take(1);
  }

  hasEventPostListInApi(pageNumber: number): Observable<boolean> {
    this.store.dispatch(new EventPostActions.FetchAction());

    return this.eventPostService.getList(pageNumber)
      .map(data => new EventPostActions.AddPaginatedItemListAction(data))
      .do(action => this.store.dispatch(action))
      .map(_ => true)
      .catch(error => {
        console.error(error);
        this.router.navigate([ '/404' ]);
        return Observable.of(false);
      });
  }

  hasEventPostList(pageNumber: number): Observable<boolean> {
    return this.hasEventPostListInStore(pageNumber)
      .switchMap(inStore => {
        if (inStore) {
          this.store.dispatch(new EventPostActions.UpdatePaginationAction(pageNumber));
          return Observable.of(inStore);
        }
        return this.hasEventPostListInApi(pageNumber);
      });
  }

  canActivate(route: ActivatedRouteSnapshot) {
    return this.hasEventPostList(+route.params[ 'pageNumber' ] || 1);
  }
}
