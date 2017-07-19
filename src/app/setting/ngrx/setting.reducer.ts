import { SettingState } from './setting.state';
import { SettingActions } from './setting.action';

export function settingReducer(state: SettingState.IState = SettingState.initialState,
                               action: SettingActions.Actions) {
  switch (action.type) {
    case SettingActions.ActionTypes.API_ERROR:
      // Always push latest error on top
      const errors = [
        action.payload,
        ...(state.errors || [])
      ];
      return { ...state, errors };
    case SettingActions.ActionTypes.CHANGED:
      return { ...state, data: { ...action.payload } };
    default:
      return state;
  }
}
