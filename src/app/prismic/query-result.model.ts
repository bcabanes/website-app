export namespace IPrismic {

  export interface SingleQueryResult {
    alternate_languages: Array<any>;
    data: any;
    first_publication_date: string;
    href: string;
    id: string;
    lang: string;
    last_publication_date: string;
    linked_documents: Array<any>;
    slugs: Array<string>;
    tags: Array<any>;
    type: string;
    uid: string;
  }

  export interface PaginatedQueryResult {
    next_page: number;
    page: number;
    prev_page: number;
    results: Array<SingleQueryResult>;
    results_per_page: number;
    results_size: number;
    total_pages: number;
    total_results_size: number;
    version: string;
    license: string;
  }

  export interface DataSetInterface<T> {
    type: string;
    value: [ T ];
  }

  export interface StructuredText {
    type: string;
    text: string;
    spans: any[];
  }

  export interface Image {
    main: {
      dimensions: {},
      alt: string,
      copyright: string,
      url: string
    };
    views: any;
  }
}
