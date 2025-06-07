'use client';

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full py-6 bg-background border-t text-center text-sm text-muted-foreground dark:bg-background dark:border-zinc-800">
      {t("footer.developedBy")} <span className="font-semibold text-primary">Erion Maia</span> · © 2025 · {t("footer.rights")}
      <br />
      <a href="https://www.linkedin.com/in/erionmaia" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary ml-1">LinkedIn</a>
    </footer>
  );
} 