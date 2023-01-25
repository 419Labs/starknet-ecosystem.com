export interface Ads {
  title: string;
  description: string;
  callToAction: string;
  link: string;
  banner?: string;
  bannerSupp?: string; // TODO delete, project will give correct sized banner
  bgColor?: string;
  fontColor?: string;
  active?: boolean;
}
