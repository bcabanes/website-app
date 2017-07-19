import { settingReducer } from './setting.reducer';
import { SettingState } from './setting.state';
import { SettingDataInterface } from '../setting.model';
import { SettingActions } from './setting.action';

describe('SettingReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = settingReducer(undefined, action);
      expect(result).toEqual(SettingState.initialState);
    });
  });

  describe('CHANGED', () => {
    it('should add data to state', () => {
      const data = {
        logo : null,
        title: null
      } as SettingDataInterface;
      const createAction = new SettingActions.ChangedAction(data);
      const expectedResult = { data };

      const result = settingReducer(SettingState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('API_ERROR', () => {
    it('should add error to state', () => {
      const error = new Error('API failure');
      const createAction = new SettingActions.ApiErrorAction(error);
      const expectedResult = {
        data  : null,
        errors: [ error ]
      };

      const result = settingReducer(SettingState.initialState, createAction);
      expect(result).toEqual(expectedResult);
    });
  });
});
