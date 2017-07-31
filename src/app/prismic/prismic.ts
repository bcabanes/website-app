import { InjectionToken } from '@angular/core';

import Prismic from 'prismic-javascript';

export const PRISMIC_TOKEN = new InjectionToken<any>('PrismicJS');
export const PrismicProvider = { provide: PRISMIC_TOKEN, useValue: Prismic };
