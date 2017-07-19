import { IPrismic } from '../prismic/query-result.model';

export interface SettingDataInterface {
  title?: IPrismic.DataSetInterface<IPrismic.StructuredText>;
  logo?: IPrismic.DataSetInterface<IPrismic.Image>;
}
