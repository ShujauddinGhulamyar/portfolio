"use client";

import clsx from "clsx";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LocaleSwitcher({ label, defaultValue }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  // Fonction de changement de langue
  function changeLocale(locale) {
    startTransition(() => {
      router.replace({ pathname, params }, { locale });
    });
  }

  return (
    <div className="locale-switcher">
      <p className="sr-only">{label}</p>
      <div className="flex space-x-4">
        <button
          className={clsx(
            " font-semibold",
            isPending && "opacity-50",
            defaultValue === "en" ? "text-accent" : "text-gray-500"
          )}
          onClick={() => changeLocale("en")}
          disabled={isPending}
        >
          EN
        </button>
        <p>|</p>
        <button
          className={clsx(
            " font-semibold",
            isPending && "opacity-50",
            defaultValue === "fr" ? "text-accent" : "text-gray-500"
          )}
          onClick={() => changeLocale("fr")}
          disabled={isPending}
        >
          FR
        </button>
      </div>
    </div>
  );
}
