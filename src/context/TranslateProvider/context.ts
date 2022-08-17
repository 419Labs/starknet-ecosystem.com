import React from "react";

import type { TranslateManagerState } from "./model";
import { TRANSLATE_STATE_INITIAL_STATE } from "./model";

export const TranslateContext = React.createContext<TranslateManagerState>({
  ...TRANSLATE_STATE_INITIAL_STATE,
});

export function useTranslate() {
  return React.useContext(TranslateContext);
}
