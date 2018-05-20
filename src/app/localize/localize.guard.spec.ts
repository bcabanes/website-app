import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
// app
import { LocalizeGuard } from './localize.guard';

describe('LocalizeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalizeGuard],
      imports: [RouterTestingModule, TranslateModule.forRoot()]
    });
  });

  it('should ...', inject([LocalizeGuard], (guard: LocalizeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
