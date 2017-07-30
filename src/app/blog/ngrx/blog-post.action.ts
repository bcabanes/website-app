import { type } from '../../shared/services/helpers/type';
import { Action } from '@ngrx/store';

import { IBlogPostPaginationData } from '../blog-post-pagination.model';
import { IBlogPost } from '../blog-post.model';

export namespace BlogPostActions {
  const CATEGORY = 'BlogPost';

  export interface IActions {
    API_ERROR: string;
    ADD_ITEM: string;
    ADD_PAGINATED_ITEM_LIST: string;
    FETCH: string;
    UPDATE_PAGINATION: string;
  }

  export const ActionTypes: IActions = {
    API_ERROR              : type(`[${CATEGORY}] Api error`),
    ADD_ITEM               : type(`[${CATEGORY}] Add item`),
    ADD_PAGINATED_ITEM_LIST: type(`[${CATEGORY}] Add paginated item list`),
    FETCH                  : type(`[${CATEGORY}] Fetching blog post api`),
    UPDATE_PAGINATION      : type(`[${CATEGORY}] Pagination updated`)
  };

  export class ApiErrorAction implements Action {
    type = ActionTypes.API_ERROR;

    /**
     * @param payload error
     */
    constructor(public payload: any) {
    }
  }

  export class FetchAction implements Action {
    type = ActionTypes.FETCH;
    payload = null;
  }

  export class AddItemAction implements Action {
    type = ActionTypes.ADD_ITEM;

    /**
     * @param {IBlogPost} payload
     */
    constructor(public payload: IBlogPost) {
    }
  }

  export class AddPaginatedItemListAction implements Action {
    type = ActionTypes.ADD_PAGINATED_ITEM_LIST;

    /**
     * @param {IBlogPostPaginationData} payload
     */
    constructor(public payload: IBlogPostPaginationData) {
    }
  }

  export class UpdatePaginationAction implements Action {
    type = ActionTypes.UPDATE_PAGINATION;

    /**
     * @param {number} payload
     */
    constructor(public payload: number) {
    }
  }

  export type Actions =
    | ApiErrorAction
    | AddItemAction
    | AddPaginatedItemListAction
    | FetchAction
    | UpdatePaginationAction;
}
