import { IPrismic } from '../../prismic/query-result.model';
import { PageDataInterface } from '../page.model';

export namespace PageState {
  export interface IState {
    data: IPrismic.DataSetInterface<any>[];
    errors?: Array<any>;
  }

  export const initialState: IState = {
    data: []
  };
}
