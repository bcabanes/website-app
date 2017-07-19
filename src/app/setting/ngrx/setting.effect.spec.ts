import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { SettingEffect } from './setting.effect';
import { SettingService } from '../setting.service';
import { Observable } from 'rxjs/Observable';
import { SettingActions } from './setting.action';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import 'rxjs/add/observable/throw';
import { empty } from 'rxjs/observable/empty';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }
}

describe('SettingEffect', () => {
  let effects: SettingEffect;
  let settingService: any;
  let actions$: ReplaySubject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide : SettingService,
          useValue: jasmine.createSpyObj('SettingService', [ 'get' ])
        },
        { provide: Actions, useFactory: () => new TestActions() },
        SettingEffect
      ]
    });

    effects = TestBed.get(SettingEffect);
    settingService = TestBed.get(SettingService);
  });

  describe('init$', () => {
    it('should load settings data', () => {
      actions$ = new ReplaySubject(null);
      const settingsToReturn = [
        {
          logo : null,
          title: null
        }
      ];

      settingService.get.and.returnValue(Observable.of(settingsToReturn));

      actions$.next(new SettingActions.InitAction());

      effects.init$.subscribe(result => {
        expect(result).toEqual(new SettingActions.ChangedAction(settingsToReturn));
      });
    });

    it('should get api error', () => {
      actions$ = new ReplaySubject(null);
      const settingsToReturn = new Error('some error message');

      settingService.get.and.returnValue(Observable.throw(settingsToReturn));

      actions$.next(new SettingActions.InitAction());

      effects.init$.subscribe(result => {
        expect(result).toEqual(new SettingActions.ApiErrorAction(settingsToReturn));
      });
    });
  });
});
