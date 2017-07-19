import { PageActions } from './page.action';
import { PageState } from './page.state';

export function pageReducer(state: PageState.IState = PageState.initialState,
                            action: PageActions.Actions) {
  switch (action.type) {
    case PageActions.ActionTypes.API_ERROR:
      // Always push latest error on top
      const errors = [
        action.payload,
        ...(state.errors || [])
      ];
      return { ...state, errors };
    case PageActions.ActionTypes.CHANGED:
      return { ...state, data: [ ...action.payload ] };
    default:
      return state;
  }
}
