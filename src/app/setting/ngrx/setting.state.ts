import { IPrismic } from '../../prismic/query-result.model';

export namespace SettingState {
  export interface IState {
    data: IPrismic.DataSetInterface<any>;
    errors?: Array<any>;
  }

  export const initialState: IState = {
    data: null
  };
}
