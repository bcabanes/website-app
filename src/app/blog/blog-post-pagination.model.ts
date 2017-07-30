import { IBlogPost } from './blog-post.model';

export interface IBlogPostPaginationData {
  currentPage: number;
  totalPages: number[];
  data: IBlogPost[]
}
