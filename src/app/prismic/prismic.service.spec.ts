import { TestBed, inject } from '@angular/core/testing';

import { PrismicService } from './prismic.service';
import { Http } from '@angular/http';

describe('PrismicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Http, useClass: class { post = jasmine.createSpy('post') } },
        PrismicService
      ]
    });
  });

  it('should be created', inject([ PrismicService ],
    (prismicService: PrismicService) => {
      expect(prismicService).toBeTruthy();
    }));
});
