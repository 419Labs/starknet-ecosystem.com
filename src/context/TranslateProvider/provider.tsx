import { useRouter } from "next/router";
import type React from "react";
import { useMemo } from "react";

import en from "../../assets/locales/en";
import fr from "../../assets/locales/fr";
import it from "../../assets/locales/it";
import pl from "../../assets/locales/pl";
import pt from "../../assets/locales/pt";
import tr from "../../assets/locales/tr";
import zh_CN from "../../assets/locales/zh_CN";
import zh_TW from "../../assets/locales/zh_TW";

import { TranslateContext } from "./context";

export interface TranslateProviderProps {
  children: React.ReactNode;
}

export function TranslateProvider({
  children,
}: TranslateProviderProps): JSX.Element {
  const router = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getLocale = () => {
    switch (router.locale) {
      case "en":
        return en;
      case "fr":
        return fr;
      case "tr":
        return tr;
      case "it":
        return it;
      case "zh_CN":
        return zh_CN;
      case "zh_TW":
        return zh_TW;
      case "pl":
        return pl;
      case "pt":
        return pt;
      default:
        return en;
    }
  };

  const localValue = useMemo(() => {
    return { t: getLocale(), locale: router.locale };
  }, [getLocale, router.locale]);

  return (
    <TranslateContext.Provider value={localValue}>
      {children}
    </TranslateContext.Provider>
  );
}
