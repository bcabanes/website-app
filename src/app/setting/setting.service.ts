import { Injectable } from '@angular/core';
import { PrismicService } from '../prismic/prismic.service';
import { Observable } from 'rxjs/Observable';
import { IPrismic } from '../prismic/query-result.model';

import { SettingDataInterface } from './setting.model';

@Injectable()
export class SettingService {

  constructor(private prismicService: PrismicService) {
  }

  get(): Observable<SettingDataInterface> {
    return this.prismicService.getSingleType('settings')
      .map((response: IPrismic.SingleQueryResult) => response.data[ 'settings' ]);
  }

}
