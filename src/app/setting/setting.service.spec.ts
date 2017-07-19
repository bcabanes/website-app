import { TestBed } from '@angular/core/testing';
import { SettingService } from './setting.service';
import { PrismicService } from '../prismic/prismic.service';
import { Observable } from 'rxjs/Observable';

describe('Service: SettingService', () => {
  let pageService: SettingService;
  let prismicService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide : PrismicService,
          useValue: jasmine.createSpyObj('PrismicService', [ 'getSingleType' ])
        },
        SettingService
      ]
    });

    pageService = TestBed.get(SettingService);
    prismicService = TestBed.get(PrismicService);
  });

  it('should retrieve data from getCustomType method', () => {
    const response = Observable.of(
      {
        alternate_languages   : [],
        data                  : {
          settings: { logo: null }
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
        uid                   : '',
      }
    );
    const expected = { logo: null };

    prismicService.getSingleType.and.returnValue(response);

    pageService.get()
      .subscribe(result => {
        expect(result).toEqual(expected);
        expect(prismicService.getSingleType).toHaveBeenCalledWith('settings');
      });
  });
});
