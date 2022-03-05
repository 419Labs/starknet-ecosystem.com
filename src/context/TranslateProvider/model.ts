export interface TranslateState {
  common: any;
  tags: any;
}

export interface TranslateManagerState {
  t: TranslateState;
  locale: string | undefined;
}

export const TRANSLATE_STATE_INITIAL_STATE: TranslateManagerState = {
  t: {
    common: {},
    tags: {},
  },
  locale: undefined,
};
