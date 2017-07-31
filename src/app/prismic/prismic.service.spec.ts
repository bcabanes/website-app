import { TestBed, inject } from '@angular/core/testing';

import { PrismicService } from './prismic.service';
import { Http } from '@angular/http';

import { prismicConfiguration as configDefault } from '../../prismic-configuration.default';
import { prismicConfiguration as config } from '../../prismic-configuration';

import { PRISMIC_TOKEN } from './prismic';
import { Context } from './context.model';
import { Observable } from 'rxjs/Observable';

const PrismicMock = {
  api: () => Promise.resolve({}),
  Predicates: { at: function() {} }
};

describe('PrismicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: PRISMIC_TOKEN, useValue: PrismicMock },
        { provide: Http, useClass: class { post = jasmine.createSpy('post') } },
        PrismicService
      ]
    });
  });

  it('should be created', inject([ PrismicService ],
    (prismicService: PrismicService) => {
      expect(prismicService).toBeTruthy();
    }));

  it('should build context for querying the api', inject([ PrismicService ],
    (prismicService: PrismicService) => {
      const expectedResult = {
        api: {},
        endpoint    : config.apiEndpoint,
        accessToken : config.accessToken,
        linkResolver: config.linkResolver
        // toolbar: function() {}
      } as Context;

      prismicService.buildContext().subscribe((result) => {
        expect(result).toEqual(expectedResult);
      });
    }));

  it('should NOT build context using default settings', inject([ PrismicService ],
    (prismicService: PrismicService) => {
      const expectedResult = {
        api: {},
        endpoint    : configDefault.apiEndpoint,
        accessToken : configDefault.accessToken,
        linkResolver: configDefault.linkResolver
        // toolbar: function() {}
      } as Context;

      prismicService.buildContext().subscribe((result) => {
        expect(result).not.toEqual(expectedResult);
      });
    }));

  it('should validate OnBoarding', inject([ PrismicService, Http ],
    (prismicService: PrismicService, http: any) => {
      http.post.and.returnValue(Observable.of(true));
      prismicService.validateOnBoarding().subscribe(data => {
        expect(data).toBe(true)
      });
    }));

  it('should data from getByUID', inject([ PrismicService ],
    (prismicService: PrismicService) => {
      const expectedResult = { data: 'fromAPI'};
      spyOn(prismicService, 'buildContext').and.returnValue(Observable.of({
        api: { getByUID: () => Promise.resolve(expectedResult) },
        endpoint    : config.apiEndpoint,
        accessToken : config.accessToken,
        linkResolver: config.linkResolver
      }));

      prismicService.getByUID('some-type', 'some-uid').subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    }));

  it('should data from getSingleType', inject([ PrismicService ],
    (prismicService: PrismicService) => {
      const expectedResult = { data: 'fromAPI'};
      spyOn(prismicService, 'buildContext').and.returnValue(Observable.of({
        api: { getSingle: () => Promise.resolve(expectedResult) },
        endpoint    : config.apiEndpoint,
        accessToken : config.accessToken,
        linkResolver: config.linkResolver
      }));

      prismicService.getSingleType('some-type').subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    }));

  it('should data from getCustomType', inject([ PrismicService ],
    (prismicService: PrismicService) => {
      const expectedResult = { data: 'fromAPI'};
      spyOn(prismicService, 'buildContext').and.returnValue(Observable.of({
        api: { query: () => Promise.resolve(expectedResult) },
        endpoint    : config.apiEndpoint,
        accessToken : config.accessToken,
        linkResolver: config.linkResolver
      }));

      prismicService.getCustomType('some-type').subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    }));
});
