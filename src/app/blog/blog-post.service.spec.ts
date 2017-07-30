import { TestBed } from '@angular/core/testing';
import { BlogPostService } from './blog-post.service';
import { PrismicService } from '../prismic/prismic.service';
import { Observable } from 'rxjs/Observable';
import { IBlogPostPaginationData } from './blog-post-pagination.model';

describe('Service: BlogPostService', () => {
  let blogPostService: BlogPostService;
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
        BlogPostService
      ]
    });

    blogPostService = TestBed.get(BlogPostService);
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
            'blog-post': { }
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
          uid                   : 'uid title blog post',
        }
      ],
      results_per_page  : 1,
      results_size      : 1,
      total_pages       : 1,
      total_results_size: 1
    });

    const expectedResult: IBlogPostPaginationData = {
      data: [ { uid: 'uid title blog post' } ],
      currentPage: 1,
      totalPages: [ 0 ]
    };

    prismicService.getCustomType.and.returnValue(response);

    blogPostService.getList()
      .subscribe(result => {
        expect(result).toEqual(expectedResult);
        expect(prismicService.getCustomType)
          .toHaveBeenCalledWith('blog-post', '[document.first_publication_date desc]', 20, 1);
      });
  });

  it('should retrieve data from getByUID method', () => {
    const response = Observable.of({
      alternate_languages   : [],
      data                  : {
        'blog-post': { }
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
    const blogPostUID = 'some-uid';

    const expectedResult = { uid: 'some-uid' };

    prismicService.getByUID.and.returnValue(response);

    blogPostService.getByUID(blogPostUID)
      .subscribe(result => {
        expect(result).toEqual(expectedResult);
        expect(prismicService.getByUID).toHaveBeenCalledWith('blog-post', blogPostUID);
      });
  });
});
