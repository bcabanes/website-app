import { IPrismic } from '../prismic/query-result.model';

export interface PageDataInterface {
  seo_title?: string;
  title?: IPrismic.DataSetInterface<IPrismic.StructuredText>;
  image?: IPrismic.DataSetInterface<IPrismic.Image>;
  content?: IPrismic.DataSetInterface<IPrismic.StructuredText>;
  item_group?: IPrismic.DataSetInterface<any>;
  content_footer?: IPrismic.DataSetInterface<IPrismic.StructuredText>;
}
