import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventPostState } from './event-post.state';

export const getEventPostState = createFeatureSelector<EventPostState.IState>('event');

export const getEntitiesByPage = createSelector(
  getEventPostState,
  (state) => state.entityListByPage
);

export const getEventPostList = createSelector(
  getEventPostState,
  (state) => state.data
);

export const getPageStatus = createSelector(
  getEventPostState,
  (state) => ({ currentPage: state.currentPage, totalPages: state.totalPages })
);

export const getCurrentEventList = createSelector(
  getEventPostList,
  getEntitiesByPage,
  getPageStatus,
  (eventList, entitiesByPage, { currentPage, totalPages }) => {
    return {
      data: entitiesByPage.get(currentPage)
        .map(uid => eventList.get(uid)),
      currentPage,
      totalPages
    };
  }
);
