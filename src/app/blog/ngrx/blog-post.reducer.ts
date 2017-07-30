import { BlogPostActions } from './blog-post.action';
import { BlogPostState } from './blog-post.state';
import { IBlogPost } from '../blog-post.model';
import { IBlogPostPaginationData } from '../blog-post-pagination.model';

export function blogPostReducer(state: BlogPostState.IState = BlogPostState.initialState,
                            action: BlogPostActions.Actions) {
  switch (action.type) {
    case BlogPostActions.ActionTypes.API_ERROR:
      // Always push latest error on top
      const errors = [
        action.payload,
        ...(state.errors || [])
      ];
      return { ...state, errors , loading: false };
    case BlogPostActions.ActionTypes.FETCH:
      return { ...state, loading: true };
    case BlogPostActions.ActionTypes.ADD_ITEM: {
      const payload: IBlogPost = (<BlogPostActions.AddItemAction>action).payload;
      const data: Map<string, IBlogPost> = new Map(state.data);
      data.set(payload.uid, payload);

      return {
        ...state,
        data,
        loading: false
      };
    }
    case BlogPostActions.ActionTypes.ADD_PAGINATED_ITEM_LIST: {
      const payload: IBlogPostPaginationData = (<BlogPostActions.AddPaginatedItemListAction>action).payload;
      const data: Map<string, IBlogPost> = new Map(state.data);
      const entityListByPage: Map<number, string[]> = new Map(state.entityListByPage);

      payload.data.map((item: IBlogPost) => {
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
    case BlogPostActions.ActionTypes.UPDATE_PAGINATION:
      return {
        ...state,
        currentPage: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
