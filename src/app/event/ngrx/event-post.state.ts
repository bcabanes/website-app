import { IEventPost } from '../event.model';

export namespace EventPostState {
  export interface IState {
    data: Map<string, IEventPost>;
    loading: boolean;
    currentPage: number;
    entityListByPage: Map<number, string[]>
    totalPages: number[];
    errors?: Array<any>;
  }

  export const initialState: IState = {
    data: new Map(),
    loading: false,
    currentPage: null,
    entityListByPage: new Map(),
    totalPages: null
  };
}
