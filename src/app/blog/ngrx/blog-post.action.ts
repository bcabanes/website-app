import { type } from '../../shared/services/helpers/type';
import { Action } from '@ngrx/store';
import { BlogPostDataInterface } from '../blog-post.model';

export namespace BlogPostActions {
  const CATEGORY = 'BlogPost';

  export interface IActions {
    INIT: string;
    API_ERROR: string;
    CHANGED: string;
    LOAD: string;
  }

  export const ActionTypes: IActions = {
    INIT     : type(`[${CATEGORY}] Init`),
    API_ERROR: type(`[${CATEGORY}] Api error`),
    CHANGED  : type(`[${CATEGORY}] Changed blog post list`),
    LOAD     : type(`[${CATEGORY}] Loading blog post list`)
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

  export class LoadAction implements Action {
    type = ActionTypes.LOAD;
    payload = null;
  }

  export class ChangedAction implements Action {
    type = ActionTypes.CHANGED;

    /**
     * @param {BlogPostDataInterface[]} payload
     */
    constructor(public payload: BlogPostDataInterface[]) {
    }
  }

  export type Actions =
    | InitAction
    | ApiErrorAction
    | LoadAction
    | ChangedAction;
}
