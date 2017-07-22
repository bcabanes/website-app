import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { BlogPostEffect } from './blog-post.effect';
import { BlogPostService } from '../blog-post.service';
import { Observable } from 'rxjs/Observable';
import { BlogPostActions } from './blog-post.action';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import 'rxjs/add/observable/throw';
import { empty } from 'rxjs/observable/empty';
import { Store } from '@ngrx/store';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }
}

describe('BlogPostEffect', () => {
  let effects: BlogPostEffect;
  let pageService: any;
  let actions$: ReplaySubject<any>;
  let store: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide : BlogPostService,
          useValue: jasmine.createSpyObj('BlogPostService', [ 'getList' ])
        },
        { provide: Actions, useFactory: () => new TestActions() },
        { provide: Store, useClass: class { dispatch = jasmine.createSpy('dispatch') } },
        BlogPostEffect
      ]
    });

    effects = TestBed.get(BlogPostEffect);
    pageService = TestBed.get(BlogPostService);
    store = TestBed.get(Store);
  });

  describe('postList$', () => {
    it('should load blog post list data', () => {
      actions$ = new ReplaySubject(null);
      const blogPostToReturn = [ {
        uid: 'some-uid'
      } ];

      pageService.getList.and.returnValue(Observable.of(blogPostToReturn));

      actions$.next(new BlogPostActions.LoadAction());

      effects.postList$.subscribe(result => {
        expect(result).toEqual(new BlogPostActions.ChangedAction(blogPostToReturn));
      });
    });

    it('should get api error', () => {
      actions$ = new ReplaySubject(null);
      const blogPostToReturn = new Error('some error message');

      pageService.getList.and.returnValue(Observable.throw(blogPostToReturn));

      actions$.next(new BlogPostActions.InitAction());

      effects.postList$.subscribe(result => {
        expect(result).toEqual(new BlogPostActions.ApiErrorAction(blogPostToReturn));
      });
    });
  });
});
