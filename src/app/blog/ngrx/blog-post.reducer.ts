import { BlogPostActions } from './blog-post.action';
import { BlogPostState } from './blog-post.state';

export function blogPostReducer(state: BlogPostState.IState = BlogPostState.initialState,
                            action: BlogPostActions.Actions) {
  switch (action.type) {
    case BlogPostActions.ActionTypes.API_ERROR:
      // Always push latest error on top
      const errors = [
        action.payload,
        ...(state.errors || [])
      ];
      return { ...state, errors };
    case BlogPostActions.ActionTypes.CHANGED:
      return { ...state, data: [ ...action.payload ] };
    default:
      return state;
  }
}
