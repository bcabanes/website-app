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

import { SettingActions } from './setting.action';
import { SettingService } from '../setting.service';

@Injectable()
export class SettingEffect {

  @Effect() init$: Observable<Action> = defer(
    () => Observable.of(new SettingActions.InitAction()))
    .switchMap((action: SettingActions.InitAction) =>
      this.settingService.get()
        .map(data => new SettingActions.ChangedAction(data))
        .catch(error => Observable.of(new SettingActions.ApiErrorAction(error))));

  constructor(private actions$: Actions,
              private settingService: SettingService) {
  }
}
