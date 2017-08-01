import { eventPostReducer } from './event-post.reducer';
import { EventPostState } from './event-post.state';
import { IEventPost } from '../event.model';
import { EventPostActions } from './event-post.action';
import { IEventPostPaginationData } from '../event-pagination.model';

describe('EventPostReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = eventPostReducer(undefined, action);
      expect(result).toEqual(EventPostState.initialState);
    });
  });

  describe('API_ERROR', () => {
    it('should add error to state', () => {
      const error = new Error('API failure');
      const createAction = new EventPostActions.ApiErrorAction(error);

      const expectedResult: EventPostState.IState = Object.assign({},
        EventPostState.initialState,
        {
          errors: [ error ]
        });

      const result = eventPostReducer(EventPostState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('FETCH', () => {
    it('should set loading to true', () => {
      const createAction = new EventPostActions.FetchAction();

      const expectedResult: EventPostState.IState = Object.assign({},
        EventPostState.initialState,
        {
          loading: true
        });

      const result = eventPostReducer(EventPostState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('ADD_ITEM', () => {
    it('should add a event in data list', () => {
      const blogPost: IEventPost = { uid: 'some-uid' };
      const createAction = new EventPostActions.AddItemAction(blogPost);

      const expectedResult: EventPostState.IState = Object.assign({},
        EventPostState.initialState,
        {
          data: new Map().set(blogPost.uid, blogPost)
        });

      const result = eventPostReducer(EventPostState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('ADD_PAGINATED_ITEM_LIST', () => {
    it('should add events in data list, update entitiesByPage and pagination information', () => {
      const paginationData: IEventPostPaginationData = {
        data       : [ { uid: 'some-uid' } ],
        currentPage: 1,
        totalPages : [ 1 ]
      };
      const createAction = new EventPostActions.AddPaginatedItemListAction(paginationData);

      const expectedResult: EventPostState.IState = Object.assign({},
        EventPostState.initialState,
        {
          data            : new Map().set(paginationData.data[ 0 ].uid, paginationData.data[ 0 ]),
          entityListByPage: new Map().set(1, paginationData.data[ 0 ].uid),
          currentPage     : 1,
          totalPages      : [ 1 ]
        });

      const result = eventPostReducer(EventPostState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('UPDATE_PAGINATION', () => {
    it('should update current page in store', () => {
      const currentPage = 4;
      const createAction = new EventPostActions.UpdatePaginationAction(currentPage);

      const expectedResult: EventPostState.IState = Object.assign({},
        EventPostState.initialState,
        { currentPage });

      const result = eventPostReducer(EventPostState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });
});
