import { pageReducer } from './page.reducer';
import { PageState } from './page.state';
import { PageDataInterface } from '../page.model';
import { PageActions } from './page.action';

describe('PageReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = pageReducer(undefined, action);
      expect(result).toEqual(PageState.initialState);
    });
  });

  describe('CHANGED', () => {
    it('should add data to state', () => {
      const data = [ { seo_title: 'Page seo title' } ] as PageDataInterface[];
      const createAction = new PageActions.ChangedAction(data);
      const expectedResult = { data };

      const result = pageReducer(PageState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('API_ERROR', () => {
    it('should add error to state', () => {
      const error = new Error('API failure');
      const createAction = new PageActions.ApiErrorAction(error);
      const expectedResult = {
        data  : [],
        errors: [ error ]
      };

      const result = pageReducer(PageState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });
});
