import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { map } from 'rxjs/operators';
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
    return fromPromise(this.client.getEntry(contentId))
      .pipe(map((entry: any) => entry.fields));
  }

  public getContentList(contentType: string): Observable<any[]> {
    return fromPromise(this.client.getEntries({
      content_type: contentType,
      order: '-sys.createdAt'
    }))
      .pipe(map((entry: any) => entry.items.map(item => item.fields)));
  }
}
