import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrismicService } from '../prismic/prismic.service';
import { CookieService } from 'ngx-cookie';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Preview } from '../prismic/preview.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit, OnDestroy {
  private _previewExpires = 30 * 60 * 1000; // 30 minutes
  private _routeStream: Subscription;

  constructor(private prismicService: PrismicService,
              private cookieService: CookieService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this._routeStream = this.route.queryParams
      .map((params: Params): string => params['token'])
      .flatMap((token: string) => this.prismicService.preview(token))
      .subscribe((previewData: Preview) => {
        this.cookieService.put(previewData.cookieName, previewData.token, this._previewExpires);
        this.router.navigateByUrl(previewData.redirectUrl);
      });
  }

  ngOnDestroy() {
    this._routeStream.unsubscribe();
  }
}
