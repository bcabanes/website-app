import { TestBed, inject } from '@angular/core/testing';

import { PrismicService } from './prismic.service';
import { Http } from '@angular/http';

import { prismicConfiguration as configDefault } from '../../prismic-configuration.default';
import { prismicConfiguration as config } from '../../prismic-configuration';

import { PRISMIC_TOKEN } from './prismic';
import { Context } from './context.model';
import { Observable } from 'rxjs/Observable';

const PrismicMock = {
  api: () => Promise.resolve({})
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
      })
    }));

  it('should validate validateOnBoarding', inject([ PrismicService, Http ],
    (prismicService: PrismicService, http: any) => {
      http.post.and.returnValue(Observable.of(true));
      prismicService.validateOnBoarding().subscribe(data => {
        expect(data).toBe(true)
      });
    }));
});
