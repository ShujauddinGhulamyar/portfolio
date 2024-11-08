"use client";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects"); // Utilisation des traductions pour la page "Projects"

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4 text-accent">{t("title")}</h1>
      <p className="text-lg">{t("description")}</p>
    </div>
  );
};

export default Projects;
