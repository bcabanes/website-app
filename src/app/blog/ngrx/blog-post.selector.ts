import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogPostState } from './blog-post.state';

export const getBlogPostState = createFeatureSelector<BlogPostState.IState>('blogPostList');

export const getEntitiesByPage = createSelector(
  getBlogPostState,
  (state) => state.entityListByPage
);

export const getBlogPostList = createSelector(
  getBlogPostState,
  (state) => state.data
);

export const getPageStatus = createSelector(
  getBlogPostState,
  (state) => ({ currentPage: state.currentPage, totalPages: state.totalPages })
);

export const getCurrentBlogPostList = createSelector(
  getBlogPostList,
  getEntitiesByPage,
  getPageStatus,
  (blogPostList, entitiesByPage, { currentPage, totalPages }) => {
    return {
      data: entitiesByPage.get(currentPage)
        .map(uid => blogPostList.get(uid)),
      currentPage,
      totalPages
    };
  }
);
