import { PropsWithChildren } from "react";

import { I18nProviderClient } from "@/locales/client";

type ProvidersProps = {
  locale: string;
};

export default function Providers({
  locale,
  children,
}: PropsWithChildren<ProvidersProps>) {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}
