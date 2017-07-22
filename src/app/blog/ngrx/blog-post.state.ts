import { IPrismic } from '../../prismic/query-result.model';
import { BlogPostDataInterface } from '../blog-post.model';

export namespace BlogPostState {
  export interface IState {
    data: IPrismic.DataSetInterface<any>[];
    errors?: Array<any>;
  }

  export const initialState: IState = {
    data: []
  };
}
