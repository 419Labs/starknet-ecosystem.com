export interface TranslateState {
  common: any;
  tags: any;
  header: any;
  footer: any;
  jobs: any;
  metrics: any;
  academy: any;
  grants: any;
  tokens: any;
  notFound: any;
  cookies: any;
}

export interface TranslateManagerState {
  t: TranslateState;
  locale: string | undefined;
}

export const TRANSLATE_STATE_INITIAL_STATE: TranslateManagerState = {
  t: {
    common: {},
    tags: {},
    header: {},
    footer: {},
    jobs: {},
    metrics: {},
    academy: {},
    grants: {},
    tokens: {},
    notFound: {},
    cookies: {},
  },
  locale: undefined,
};
