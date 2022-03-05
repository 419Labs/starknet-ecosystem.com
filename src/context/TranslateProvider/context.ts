import React from "react";

import { TRANSLATE_STATE_INITIAL_STATE, TranslateManagerState } from "./model";

export const TranslateContext = React.createContext<TranslateManagerState>({
  ...TRANSLATE_STATE_INITIAL_STATE,
});

export function useTranslate() {
  return React.useContext(TranslateContext);
}
