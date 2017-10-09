import { blogPostReducer } from './blog-post.reducer';
import { BlogPostState } from './blog-post.state';
import { IBlogPost } from '../blog-post.model';
import { BlogPostActions } from './blog-post.action';
import { IBlogPostPaginationData } from '../blog-post-pagination.model';

describe('BlogPostReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = blogPostReducer(undefined, action);
      expect(result).toEqual(BlogPostState.initialState);
    });
  });

  describe('API_ERROR', () => {
    it('should add error to state', () => {
      const error = new Error('API failure');
      const createAction = new BlogPostActions.ApiErrorAction(error);

      const expectedResult: BlogPostState.IState = Object.assign({},
        BlogPostState.initialState,
        {
          errors: [ error ]
        });

      const result = blogPostReducer(BlogPostState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('FETCH', () => {
    it('should set loading to true', () => {
      const createAction = new BlogPostActions.FetchAction();

      const expectedResult: BlogPostState.IState = Object.assign({},
        BlogPostState.initialState,
        {
          loading: true
        });

      const result = blogPostReducer(BlogPostState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('ADD_ITEM', () => {
    it('should add a blog post in data list', () => {
      const blogPost: IBlogPost = { uid: 'some-uid' };
      const createAction = new BlogPostActions.AddItemAction(blogPost);

      const expectedResult: BlogPostState.IState = Object.assign({},
        BlogPostState.initialState,
        {
          data: new Map().set(blogPost.uid, blogPost)
        });

      const result = blogPostReducer(BlogPostState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('ADD_PAGINATED_ITEM_LIST', () => {
    it('should add blog posts in data list, update entitiesByPage and pagination information', () => {
      const paginationData: IBlogPostPaginationData = {
        data       : [ { uid: 'some-uid' } ],
        currentPage: 1,
        totalPages : [ 1 ]
      };
      const createAction = new BlogPostActions.AddPaginatedItemListAction(paginationData);

      const expectedResult: BlogPostState.IState = Object.assign({},
        BlogPostState.initialState,
        {
          data            : new Map().set(paginationData.data[ 0 ].uid, paginationData.data[ 0 ]),
          entityListByPage: new Map().set(1, [ paginationData.data[ 0 ].uid ]),
          currentPage     : 1,
          totalPages      : [ 1 ]
        });

      const result = blogPostReducer(BlogPostState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('UPDATE_PAGINATION', () => {
    it('should update current page in store', () => {
      const currentPage = 4;
      const createAction = new BlogPostActions.UpdatePaginationAction(currentPage);

      const expectedResult: BlogPostState.IState = Object.assign({},
        BlogPostState.initialState,
        { currentPage });

      const result = blogPostReducer(BlogPostState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });
});
