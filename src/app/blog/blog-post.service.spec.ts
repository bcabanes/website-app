import { TestBed } from '@angular/core/testing';
import { BlogPostService } from './blog-post.service';
import { PrismicService } from '../prismic/prismic.service';
import { Observable } from 'rxjs/Observable';

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
            'blog-post': { title: 'Some blog post title' }
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
    const expected = [
      {
        uid: 'uid title blog post',
        title    : 'Some blog post title'
      }
    ];

    prismicService.getCustomType.and.returnValue(response);

    blogPostService.getList()
      .subscribe(result => {
        expect(result).toEqual(expected);
        expect(prismicService.getCustomType)
          .toHaveBeenCalledWith('blog-post', '[blog-post.date desc]', 20, 1);
      });
  });

  it('should retrieve data from getByUID method', () => {
    const response = Observable.of({
      alternate_languages   : [],
      data                  : {
        'blog-post': { title: 'Some blog post title' }
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
    const expected = {
      uid: 'some-uid',
      title    : 'Some blog post title'
    };

    prismicService.getByUID.and.returnValue(response);

    blogPostService.getByUID(blogPostUID)
      .subscribe(result => {
        expect(result).toEqual(expected);
        expect(prismicService.getByUID).toHaveBeenCalledWith('blog-post', blogPostUID);
      });
  });
});
