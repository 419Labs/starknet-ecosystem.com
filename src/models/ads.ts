export interface Ads {
  title: string;
  link: string;
  banner?: string;
  bannerSupp?: string; // TODO delete, project will give correct sized banner
  color?: string;
  active?: boolean;
}
