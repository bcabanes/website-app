import { type } from '../../shared/services/helpers/type';
import { Action } from '@ngrx/store';
import { SettingDataInterface } from '../setting.model';

export namespace SettingActions {
  const CATEGORY = 'Settings';

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
    payload: string = null;
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
     * @param {SettingDataInterface} payload
     */
    constructor(public payload: SettingDataInterface) {
    }
  }

  export type Actions = InitAction | ApiErrorAction | ChangedAction;
}
