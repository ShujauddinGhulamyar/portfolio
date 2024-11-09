import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./LocalSwitcherSelect";

export default function LocaleSwitcher() {
  const locale = useLocale();
  console.log(locale);

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {cur} {/* Affichage du code de la langue sans traduction */}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
