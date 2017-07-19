import {
  Action,
  ActionReducer,
  ActionReducerFactory,
  ActionReducerMap,
  combineReducers,
  compose
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { type } from '../shared/services/helpers/type';
import { PageState } from '../page/ngrx/page.state';
import { pageReducer } from '../page/ngrx/page.reducer';
import { settingReducer } from '../setting/ngrx/setting.reducer';
import { SettingState } from '../setting/ngrx/setting.state';

export namespace AppActions {
  const CATEGORY = 'App';

  export interface IActions {
    NOOP: string;
  }

  export const ActionTypes: IActions = {
    NOOP: type(`[${CATEGORY}] Noop`)
  };

  export class NoopAction implements Action {
    type = ActionTypes.NOOP;
    payload: string = null;
  }

  export type Actions = NoopAction
}

export interface IAppState {
  // eventPostList: '';
  pageList: PageState.IState;
  // tagList: '';
  // teamMemberList: '';
  // partnerList: '';
  settings: SettingState.IState;
  router: RouterReducerState
}

export const appReducers: ActionReducerMap<IAppState> = {
  pageList: pageReducer,
  settings: settingReducer,
  router: routerReducer

};

/**
 * Development console.log actions
 */
function logger(reducer: ActionReducer<IAppState>) {
  return (state: IAppState, action: any) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map
 * to compose the root meta-reducer.
 * To add more meta-reducers, provide a custom reducer factory.
 */
export const developmentReducerFactory: ActionReducerFactory<IAppState, Action>
  = compose(logger, combineReducers);
