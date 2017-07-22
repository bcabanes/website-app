import { blogPostReducer } from './blog-post.reducer';
import { BlogPostState } from './blog-post.state';
import { BlogPostDataInterface } from '../blog-post.model';
import { BlogPostActions } from './blog-post.action';

describe('PageReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = blogPostReducer(undefined, action);
      expect(result).toEqual(BlogPostState.initialState);
    });
  });

  describe('CHANGED', () => {
    it('should add data to state', () => {
      const data = [ { uid: 'some-uid' } ] as BlogPostDataInterface[];
      const createAction = new BlogPostActions.ChangedAction(data);
      const expectedResult = { data };

      const result = blogPostReducer(BlogPostState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('API_ERROR', () => {
    it('should add error to state', () => {
      const error = new Error('API failure');
      const createAction = new BlogPostActions.ApiErrorAction(error);
      const expectedResult = {
        data  : [],
        errors: [ error ]
      };

      const result = blogPostReducer(BlogPostState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });
});
