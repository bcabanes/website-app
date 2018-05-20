import { TestBed, async, inject } from '@angular/core/testing';

import { LocalizeGuard } from './localize.guard';

describe('LocalizeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalizeGuard]
    });
  });

  it('should ...', inject([LocalizeGuard], (guard: LocalizeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
