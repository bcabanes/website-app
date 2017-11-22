import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import * as contentful from 'contentful';
// app
import { environment } from 'environments/environment';

@Injectable()
export class ContentfulService {
  private credentials: { space: string, accessToken: string } = environment.contentful;
  private client: any;

  constructor() {
    this.client = contentful.createClient(this.credentials);
  }

  public getContent(contentId: string) {
    return Observable.fromPromise(this.client.getEntry(contentId))
      .map((entry: any) => entry.fields);
  }

  public getContentList(contentType: string): Observable<any[]> {
    return Observable.fromPromise(this.client.getEntries({
      content_type: contentType,
      order: '-sys.createdAt'
    }))
      .map((entry: any) => entry.items.map(item => item.fields));
  }
}
