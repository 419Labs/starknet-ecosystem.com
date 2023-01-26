export interface Ads {
  title: string;
  description: string;
  callToAction: string;
  link: string;
  bannerSmall?: string;
  bannerSupp?: string; // TODO delete, project will give correct sized banner
  bannerFull?: string;
  bgColor?: string;
  fontColor?: string;
  active?: boolean;
}
