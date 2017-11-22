export interface EventModel {
  banner: string;
  companyAddress: string;
  companyName: string;
  date: string;
  description: string;
  eventbriteLink: string;
  location: {
    lon: number;
    lat: number;
  };
  slug: string;
  tags: string[];
  title: string;
}
