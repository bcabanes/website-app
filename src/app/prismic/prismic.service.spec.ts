import { TestBed, inject } from '@angular/core/testing';

import { PrismicService } from './prismic.service';
import { HttpClient } from '@angular/common/http';

import { prismicConfiguration as configDefault } from '../../prismic-configuration.default';
import { prismicConfiguration as config } from '../../prismic-configuration';

import { PRISMIC_TOKEN } from './prismic';
import { Context } from './context.model';
import { Observable } from 'rxjs/Observable';
import { IPrismic } from './query-result.model';

const PrismicMock = {
  api       : () => Promise.resolve({}),
  Predicates: {
    at: function () {
    }
  }
};

const singleResultMock: IPrismic.SingleQueryResult = {
  'id'                    : 'WWbwICwAAIUn2RCK',
  'uid'                   : null,
  'type'                  : 'settings',
  'href'                  : 'https://sketchmtl.prismic.io/api/v1/documents/search?ref=something',
  'tags'                  : [],
  'first_publication_date': '2017-07-13T03:59:31+0000',
  'last_publication_date' : '2017-07-13T04:11:03+0000',
  'slugs'                 : [ 'settings-slug' ],
  'linked_documents'      : [],
  'lang'                  : 'en-gb',
  'alternate_languages'   : [],
  'data'                  : {
    'settings': {
      'logo'         : {
        'type' : 'Image',
        'value': {
          'main' : {
            'dimensions': {
              'width' : 250,
              'height': 250
            },
            'alt'       : null,
            'copyright' : null,
            'url'       : 'https://prismic-io.s3.amazonaws.com/sketchmtl/bdc1f0dd4a57f59c75c49094eb8800ceb7cc74e5_2.jpg'
          },
          'views': {}
        }
      },
      'description'  : {
        'type' : 'StructuredText',
        'value': [
          {
            'type' : 'paragraph',
            'text' : 'Some text.',
            'spans': []
          } ]
      },
      'facebook_link': {
        'type' : 'Link.web',
        'value': { 'url': 'https://www.facebook.com/sketchmtl' }
      },
      'twitter_link' : {
        'type' : 'Link.web',
        'value': { 'url': 'https://twitter.com/sketchmtl' }
      },
      'slack-link'   : {
        'type' : 'Link.web',
        'value': { 'url': 'http://sketchmtl.now.sh' }
      },
      'slack_link'   : {
        'type' : 'Link.web',
        'value': { 'url': 'https://sketchmtl.now.sh' }
      }
    }
  }
};
const paginatedResultMock: IPrismic.PaginatedQueryResult = {
  'page'              : 1,
  'results_per_page'  : 1,
  'results_size'      : 1,
  'total_results_size': 1,
  'total_pages'       : 1,
  'next_page'         : null,
  'prev_page'         : null,
  'results'           : [ singleResultMock ],
  'version'           : '3c3a651',
  'license'           : 'All Rights Reserved'
};

describe('PrismicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: PRISMIC_TOKEN, useValue: PrismicMock },
        {
          provide: HttpClient, useClass: class {
          post = jasmine.createSpy('post');
        }
        },
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
        api         : {},
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
        api         : {},
        endpoint    : configDefault.apiEndpoint,
        accessToken : configDefault.accessToken,
        linkResolver: configDefault.linkResolver
        // toolbar: function() {}
      } as Context;

      prismicService.buildContext().subscribe((result) => {
        expect(result).not.toEqual(expectedResult);
      });
    }));

  it('should validate OnBoarding', inject([ PrismicService, HttpClient ],
    (prismicService: PrismicService, http: any) => {
      http.post.and.returnValue(Observable.of(true));
      prismicService.validateOnBoarding().subscribe(data => {
        expect(data).toBe(true);
      });
    }));

  it('should retrieve data from getByUID', inject([ PrismicService ],
    (prismicService: PrismicService) => {
      const expectedResult = singleResultMock;
      spyOn(prismicService, 'buildContext').and.returnValue(Observable.of({
        api         : { getByUID: () => Promise.resolve(singleResultMock) },
        endpoint    : config.apiEndpoint,
        accessToken : config.accessToken,
        linkResolver: config.linkResolver
      }));

      prismicService.getByUID('some-type', 'some-uid').subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    }));

  it('should retrieve data from getSingleType', inject([ PrismicService ],
    (prismicService: PrismicService) => {
      const expectedResult = singleResultMock;
      spyOn(prismicService, 'buildContext').and.returnValue(Observable.of({
        api         : { getSingle: () => Promise.resolve(singleResultMock) },
        endpoint    : config.apiEndpoint,
        accessToken : config.accessToken,
        linkResolver: config.linkResolver
      }));

      prismicService.getSingleType('some-type').subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    }));

  it('should retrieve data from getCustomType', inject([ PrismicService ],
    (prismicService: PrismicService) => {
      const expectedResult = paginatedResultMock;
      spyOn(prismicService, 'buildContext').and.returnValue(Observable.of({
        api         : { query: () => Promise.resolve(paginatedResultMock) },
        endpoint    : config.apiEndpoint,
        accessToken : config.accessToken,
        linkResolver: config.linkResolver
      }));

      prismicService.getCustomType('some-type').subscribe(result => {
        expect(result).toEqual(expectedResult);
      });
    }));
});
