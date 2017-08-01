import { TestBed } from '@angular/core/testing';
import { EventPostService } from './event-post.service';
import { PrismicService } from '../prismic/prismic.service';
import { Observable } from 'rxjs/Observable';
import { IEventPostPaginationData } from './event-pagination.model';

describe('Service: EventPostService', () => {
  let eventPostService: EventPostService;
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
        EventPostService
      ]
    });

    eventPostService = TestBed.get(EventPostService);
    prismicService = TestBed.get(PrismicService);
  });

  it('should retrieve data from getCustomType method', () => {
    const response = Observable.of({
      next_page         : 1,
      page              : 1,
      prev_page         : 1,
      results           : [
        {
          alternate_languages   : [],
          data                  : {
            'event-post': { }
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
          uid                   : 'uid title event post',
        }
      ],
      results_per_page  : 1,
      results_size      : 1,
      total_pages       : 1,
      total_results_size: 1
    });

    const expectedResult: IEventPostPaginationData = {
      data: [ { uid: 'uid title event post' } ],
      currentPage: 1,
      totalPages: [ 0 ]
    };

    prismicService.getCustomType.and.returnValue(response);

    eventPostService.getList()
      .subscribe(result => {
        expect(result).toEqual(expectedResult);
        expect(prismicService.getCustomType)
          .toHaveBeenCalledWith('event-post', '[document.first_publication_date desc]', 20, 1);
      });
  });

  it('should retrieve data from getByUID method', () => {
    const response = Observable.of({
      alternate_languages   : [],
      data                  : {
        'event-post': { }
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
      uid                   : 'some-uid',
    });
    const eventPostUID = 'some-uid';

    const expectedResult = { uid: 'some-uid' };

    prismicService.getByUID.and.returnValue(response);

    eventPostService.getByUID(eventPostUID)
      .subscribe(result => {
        expect(result).toEqual(expectedResult);
        expect(prismicService.getByUID).toHaveBeenCalledWith('event-post', eventPostUID);
      });
  });
});
