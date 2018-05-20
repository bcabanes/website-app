import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalizeService {

  constructor(private routerService: Router) {}

  public switchLanguage(language: string): Observable<string> {
    const url = this.routerService.routerState.snapshot.url
      .replace(/\/([a-z]{2})\//g, `/${language}/`);

    return fromPromise(this.routerService.navigateByUrl(url))
      .pipe(mapTo(language));
  }
}
