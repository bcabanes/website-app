import { EventPostActions } from './event-post.action';
import { EventPostState } from './event-post.state';
import { IEventPost } from '../event.model';
import { IEventPostPaginationData } from '../event-pagination.model';

export function eventPostReducer(state: EventPostState.IState = EventPostState.initialState,
                                 action: EventPostActions.Actions) {
  switch (action.type) {
    case EventPostActions.ActionTypes.API_ERROR:
      // Always push latest error on top
      const errors = [
        action.payload,
        ...(state.errors || [])
      ];
      return { ...state, errors , loading: false };
    case EventPostActions.ActionTypes.FETCH:
      return { ...state, loading: true };
    case EventPostActions.ActionTypes.ADD_ITEM: {
      const payload: IEventPost = (<EventPostActions.AddItemAction>action).payload;
      const data: Map<string, IEventPost> = new Map(state.data);
      data.set(payload.uid, payload);

      return {
        ...state,
        data,
        loading: false
      };
    }
    case EventPostActions.ActionTypes.ADD_PAGINATED_ITEM_LIST: {
      const payload: IEventPostPaginationData = (<EventPostActions.AddPaginatedItemListAction>action).payload;
      const data: Map<string, IEventPost> = new Map(state.data);
      const entityListByPage: Map<number, string[]> = new Map(state.entityListByPage);

      payload.data.map((item: IEventPost) => {
        data.set(item.uid, item);
        entityListByPage.set(payload.currentPage, payload.data.map(i => i.uid));
      });

      return {
        ...state,
        data,
        entityListByPage,
        currentPage: payload.currentPage,
        totalPages: payload.totalPages,
        loading: false
      };
    }
    case EventPostActions.ActionTypes.UPDATE_PAGINATION:
      return {
        ...state,
        currentPage: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
