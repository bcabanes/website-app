import { IBlogPost } from '../blog-post.model';

export namespace BlogPostState {
  export interface IState {
    data: Map<string, IBlogPost>;
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
