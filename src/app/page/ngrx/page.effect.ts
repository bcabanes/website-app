import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

import { PageActions } from './page.action';
import { PageService } from '../page.service';

@Injectable()
export class PageEffect {

  // @Effect() navigateToHomePage$: Observable<Action> =
  //             handleNavigation(this.actions$, this.store, 'home', (route: ActivatedRouteSnapshot) => {
  //               return this.prismicService.getSingleType('home-page')
  //                 .map(data => {
  //                   return new PageActions.FetchPageListAction(data)
  //                 });
  //             });
  @Effect() init$: Observable<Action> = this.actions$
    .ofType(PageActions.ActionTypes.INIT)
    .startWith(new PageActions.InitAction())
    .switchMap((action: PageActions.InitAction) =>
      this.pageService.getAll()
        .map(data => new PageActions.ChangedAction(data))
        .catch(error => Observable.of(new PageActions.ApiErrorAction(error))));

  constructor(private actions$: Actions,
              private pageService: PageService) {
  }
}
