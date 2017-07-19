import { type } from '../../shared/services/helpers/type';
import { Action } from '@ngrx/store';
import { PageDataInterface } from '../page.model';

export namespace PageActions {
  const CATEGORY = 'Page';

  export interface IActions {
    INIT: string;
    API_ERROR: string;
    CHANGED: string;
  }

  export const ActionTypes: IActions = {
    INIT     : type(`[${CATEGORY}] Init`),
    API_ERROR: type(`[${CATEGORY}] Api error`),
    CHANGED  : type(`[${CATEGORY}] Changed Pages`)
  };

  export class InitAction implements Action {
    type = ActionTypes.INIT;
    payload = null;
  }

  export class ApiErrorAction implements Action {
    type = ActionTypes.API_ERROR;

    /**
     * @param payload error
     */
    constructor(public payload: any) {
    }
  }

  export class ChangedAction implements Action {
    type = ActionTypes.CHANGED;

    // TODO: should be PageState.IState

    /**
     * @param {PageDataInterface[]} payload
     */
    constructor(public payload: PageDataInterface[]) {
    }
  }

  export type Actions = InitAction | ApiErrorAction | ChangedAction;
}
