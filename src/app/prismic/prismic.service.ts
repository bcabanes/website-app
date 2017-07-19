import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import Prismic from 'prismic-javascript';
import PrismicToolbar from 'prismic-toolbar';

import { Context } from './context.model';
import { Preview } from './preview.model';
import { IPrismic } from './query-result.model';
import { prismicConfiguration as config } from '../../prismic-configuration';

@Injectable()
export class PrismicService {
  private repositoryRegexp = /^(https?:\/\/([-\w]+)\.[a-z]+\.(io|dev))\/api(\/v2)?$/;

  constructor(private http: Http) {
  }

  public buildContext(): Observable<Context> {
    const prismicPromise = Prismic.api(config.apiEndpoint, { accessToken: config.accessToken });
    return Observable.fromPromise(prismicPromise)
      .map(
        (api) => ({
          api,
          endpoint    : config.apiEndpoint,
          accessToken : config.accessToken,
          linkResolver: config.linkResolver,
          // toolbar: this.toolbar
        } as Context),
        (error) =>
          console.error(`Error during connection to your Prismic API: ${error}`));
  }

  validateOnBoarding() {
    if (!this.validateEndpoint(config.apiEndpoint)) {
      throw new Error(`Your Prismic endpoint is not configured: ${config.apiEndpoint}`);
    }

    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.post(`${config.apiEndpoint}/app/settings/onboarding/run`, null, headers)
      .subscribe(
        null,
        (error) =>
          console.error(`Cannot access your repository, check your api endpoint: ${error}`));
  }

  private validateEndpoint(url: string): boolean {
    const [ _, repositoryUrl, name ] = url.match(this.repositoryRegexp);
    return name !== 'your-repo-name';
  }

  public getByUID(type: string, uid: string): Observable<IPrismic.SingleQueryResult> {
    return this.buildContext()
      .flatMap((context: Context) =>
        Observable.fromPromise(context.api.getByUID(type, uid)));
  }

  public getSingleType(type: string): Observable<IPrismic.SingleQueryResult> {
    return this.buildContext()
      .flatMap((context: Context) =>
        Observable.fromPromise(context.api.getSingle(type)));
  }

  public getCustomType(type: string,
                       orderings?: string,
                       pageSize?: number,
                       page?: number): Observable<IPrismic.PaginatedQueryResult> {
    orderings = orderings || `[${type}.date desc]`;
    pageSize = pageSize || 20;
    page = page || 1;
    return this.buildContext()
      .flatMap((context: Context) =>
        Observable.fromPromise(context.api.query(
          Prismic.Predicates.at('document.type', type),
          { orderings, pageSize, page }
        )));
  }

  // private toolbar(api) {
  //   const maybeCurrentExperiment = api.currentExperiment();
  //   if (maybeCurrentExperiment) {
  //     PrismicToolbar.startExperiment(maybeCurrentExperiment.googleId());
  //   }
  //   PrismicToolbar.setup(config.apiEndpoint);
  // }

  public preview(token: string): Observable<any> {
    return this.buildContext()
      .flatMap((context: Context) =>
        context.api.previewSession(token, context.linkResolver, '/'))
      .map((url: string) => ({
        cookieName : Prismic.previewCookie,
        token,
        redirectUrl: url
      }));
  }

}
