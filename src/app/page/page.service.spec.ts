import { TestBed } from '@angular/core/testing';
import { PageService } from './page.service';
import { PrismicService } from '../prismic/prismic.service';
import { Observable } from 'rxjs/Observable';

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
    const response = Observable.of({
      next_page         : 1,
      page              : 1,
      prev_page         : 1,
      results           : [
        {
          alternate_languages   : [],
          data                  : {
            page: { title: 'Some page title' }
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
          uid                   : 'seo title page',
        }
      ],
      results_per_page  : 1,
      results_size      : 1,
      total_pages       : 1,
      total_results_size: 1
    });
    const expected = [
      {
        seo_title: 'seo title page',
        title    : 'Some page title'
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
    const response = Observable.of({
      alternate_languages   : [],
      data                  : {
        page: { title: 'Some page title' }
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
      uid                   : 'someUID',
    });
    const pageUID = 'someUID';
    const expected = {
      seo_title: 'someUID',
      title    : 'Some page title'
    };

    prismicService.getByUID.and.returnValue(response);

    pageService.getByUID(pageUID)
      .subscribe(result => {
        expect(result).toEqual(expected);
        expect(prismicService.getByUID).toHaveBeenCalledWith('page', pageUID);
      });
  });
});
