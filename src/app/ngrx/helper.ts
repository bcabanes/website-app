import { State, Store } from '@ngrx/store';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

import { AppActions, IAppState } from './index';


export function handleNavigation(actions$: Actions,
                                 store: Store<IAppState>,
                                 segment: string,
                                 callback: (route: ActivatedRouteSnapshot, state: IAppState) => Observable<any>) {

  const navigation$ = actions$.ofType(ROUTER_NAVIGATION)
    .map((route: RouterNavigationAction) => route.payload.routerState.root.firstChild)
    .filter((route: ActivatedRouteSnapshot) => route.routeConfig.path === segment);

  return navigation$.withLatestFrom(store)
    .switchMap(a => callback(a[ 0 ], a[ 1 ]))
    .catch(e => {
      console.log('Network error', e);
      return of(new AppActions.NoopAction());
    });
}
