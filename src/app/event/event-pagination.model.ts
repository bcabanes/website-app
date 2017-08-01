import { IEventPost } from './event.model';

export interface IEventPostPaginationData {
  currentPage: number;
  totalPages: number[];
  data: IEventPost[]
}
