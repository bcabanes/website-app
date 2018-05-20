import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// app
import { LocalizeService } from './localize.service';

describe('LocalizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalizeService],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([LocalizeService], (service: LocalizeService) => {
    expect(service).toBeTruthy();
  }));
});
