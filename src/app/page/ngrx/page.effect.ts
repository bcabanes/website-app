import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

import { PageActions } from './page.action';
import { PageService } from '../page.service';

@Injectable()
export class PageEffect {

  @Effect() init$: Observable<Action> = defer(
    () => Observable.of(new PageActions.InitAction()))
    .switchMap((action: PageActions.InitAction) =>
      this.pageService.getAll()
        .map(data => new PageActions.ChangedAction(data))
        .catch(error => Observable.of(new PageActions.ApiErrorAction(error))));

  constructor(private actions$: Actions,
              private pageService: PageService) {
  }
}
