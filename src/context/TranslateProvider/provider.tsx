import { useRouter } from "next/router";
import type React from "react";
import { useEffect, useState } from "react";

import en from "../../assets/locales/en";
import fr from "../../assets/locales/fr";

import { TranslateContext } from "./context";
import type { TranslateState } from "./model";

export interface TranslateProviderProps {
  children: React.ReactNode;
}

export function TranslateProvider({
  children,
}: TranslateProviderProps): JSX.Element {
  const router = useRouter();
  const getLocale = () => {
    switch (router.locale) {
      case "en":
        return en;
      case "fr":
        return fr;
      default:
        return en;
    }
  };
  const [locale, setLocale] = useState<TranslateState>(getLocale());

  useEffect(() => {
    setLocale(getLocale);
  }, [router.locale]);

  return (
    <TranslateContext.Provider value={{ t: locale, locale: router.locale }}>
      {children}
    </TranslateContext.Provider>
  );
}
