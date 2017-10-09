import { TestBed } from '@angular/core/testing';
import { PageService } from './page.service';
import { PrismicService } from '../prismic/prismic.service';
import { Observable } from 'rxjs/Observable';
import { PageDataInterface } from './page.model';
import { IPrismic } from '../prismic/query-result.model';
import SingleQueryResult = IPrismic.SingleQueryResult;
import PaginatedQueryResult = IPrismic.PaginatedQueryResult;

const singleResultMock: SingleQueryResult = {
  alternate_languages   : [],
  data                  : {
    page: {
      title: {
        type : 'StructuredText',
        value: [ { spans: [], text: 'Some page title', type: 'heading2' } ]
      }
    }
  },
  first_publication_date: '',
  href                  : '',
  id                    : '',
  lang                  : '',
  last_publication_date : '',
  linked_documents      : [],
  slugs                 : [],
  tags                  : [],
  type                  : '',
  uid                   : 'some-uid'
};
const paginatedResultMock: PaginatedQueryResult = {
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

describe('Service: PageService', () => {
  let pageService: PageService;
  let prismicService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide : PrismicService,
          useValue: jasmine.createSpyObj('PrismicService', [
            'getCustomType',
            'getByUID'
          ])
        },
        PageService
      ]
    });

    pageService = TestBed.get(PageService);
    prismicService = TestBed.get(PrismicService);
  });

  it('should retrieve data from getCustomType method', () => {
    const response = Observable.of(paginatedResultMock);
    const expected: PageDataInterface[] = [
      {
        seo_title: 'some-uid',
        title    : {
          type : 'StructuredText',
          value: [ { spans: [], text: 'Some page title', type: 'heading2' } ]
        }
      }
    ];

    prismicService.getCustomType.and.returnValue(response);

    pageService.getAll()
      .subscribe(result => {
        expect(result).toEqual(expected);
        expect(prismicService.getCustomType).toHaveBeenCalledWith('page');
      });
  });

  it('should retrieve data from getByUID method', () => {
    const response = Observable.of(singleResultMock);
    const pageUID = 'some-uid';
    const expected: PageDataInterface = {
      seo_title: 'some-uid',
      title    : {
        type : 'StructuredText',
        value: [ { spans: [], text: 'Some page title', type: 'heading2' } ]
      }
    };

    prismicService.getByUID.and.returnValue(response);

    pageService.getByUID(pageUID)
      .subscribe(result => {
        expect<any>(result).toEqual(expected);
        expect<any>(prismicService.getByUID).toHaveBeenCalledWith('page', pageUID);
      });
  });
});
