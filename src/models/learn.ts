export interface Learn {
  categories: {
    name: string;
    description?: string;
    links: { label: string; url: string }[];
  }[];
}
