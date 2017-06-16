export interface PrismicConfiguration {
  accessToken?: string;
  apiEndpoint: string;
  linkResolver: Function;
}

export const prismicConfiguration: PrismicConfiguration = {
  apiEndpoint: 'https://your-repo-name.prismic.io/api/v2',
  linkResolver: (doc) => '/'
};
