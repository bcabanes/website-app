import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalizeGuard implements CanActivate {

  constructor(private routerService: Router, private translateService: TranslateService) {}

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
    this.translateService.setDefaultLang(this.translateService.getBrowserLang() || 'en');
    const authorizedParams = [ 'en', 'fr' ];

    if (!next.params.lang || !authorizedParams.includes(next.params.lang)) {
      this.routerService.navigate(['en']);
      return of(false);
    }

    return this.translateService.use(next.params.lang).pipe(mapTo(true));
  }
}
