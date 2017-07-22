import { IPrismic } from '../prismic/query-result.model';

export interface BlogPostDataInterface {
  uid?: string;
  title?: IPrismic.DataSetInterface<IPrismic.StructuredText>;
  image?: IPrismic.DataSetInterface<IPrismic.Image>;
  content?: IPrismic.DataSetInterface<IPrismic.StructuredText>;
}
