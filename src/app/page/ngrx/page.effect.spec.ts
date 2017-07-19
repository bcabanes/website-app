import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { PageEffect } from './page.effect';
import { PageService } from '../page.service';
import { Observable } from 'rxjs/Observable';
import { PageActions } from './page.action';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import 'rxjs/add/observable/throw';
import { empty } from 'rxjs/observable/empty';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }
}

describe('PageEffect', () => {
  let effects: PageEffect;
  let pageService: any;
  let actions$: ReplaySubject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide : PageService,
          useValue: jasmine.createSpyObj('PageService', [ 'getAll' ])
        },
        { provide: Actions, useFactory: () => new TestActions() },
        PageEffect
      ]
    });

    effects = TestBed.get(PageEffect);
    pageService = TestBed.get(PageService);
  });

  describe('init$', () => {
    it('should load pages data', () => {
      actions$ = new ReplaySubject(null);
      const pagesToReturn = [ {
        seo_title: '1'
      } ];

      pageService.getAll.and.returnValue(Observable.of(pagesToReturn));

      actions$.next(new PageActions.InitAction());

      effects.init$.subscribe(result => {
        expect(result).toEqual(new PageActions.ChangedAction(pagesToReturn));
      });
    });

    it('should get api error', () => {
      actions$ = new ReplaySubject(null);
      const pagesToReturn = new Error('some error message');

      pageService.getAll.and.returnValue(Observable.throw(pagesToReturn));

      actions$.next(new PageActions.InitAction());

      effects.init$.subscribe(result => {
        expect(result).toEqual(new PageActions.ApiErrorAction(pagesToReturn));
      });
    });
  });
});
