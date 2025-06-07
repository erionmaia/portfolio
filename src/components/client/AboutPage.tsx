"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl text-blue-600 md:text-5xl font-bold mb-6 dark:text-white">
            {t("about.title")}
          </h1>
          
          <div className="space-y-8">
            <section className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground text-justify">
                {t("about.description")}
              </p>
              <br />
              <p className="text-lg text-muted-foreground text-justify">
                {t("about.description2")}
              </p>
              <br />
              <p className="text-lg text-muted-foreground text-justify">
                {t("about.description3")}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2 dark:text-white">{t("about.experience")}</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-medium">Full Stack Developer</h3>
                  <p className="text-muted-foreground">Riseio • 2023 - 2025</p>
                  <p className="mt-2 text-justify">
                    {t("about.experience.riseio")}
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-medium">DataOps Analyst</h3>
                  <p className="text-muted-foreground">RKSAM • 2022 - 2023</p>
                  <p className="mt-2 text-justify">
                    {t("about.experience.rksam")}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-2 dark:text-white">{t("about.education")}</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-medium">{("about.education.computerScience")}</h3>
                  <p className="text-muted-foreground">FPB - Faculdade Internacional da Paraíba • 2021 - 2024</p>
                  <p className="mt-2 text-justify">
                    {t("about.education.computerScience.description")}
                  </p>
                </div>
              </div>
              <br />
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-medium">{t("about.education.dataScience")}</h3>
                  <p className="text-muted-foreground">Universidade Cruzeiro do Sul • 2021 - 2022</p>
                  <p className="mt-2 text-justify">
                    {t("about.education.dataScience.description")}
                  </p>
                </div>
              </div>
              <br />
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-medium">{t("about.education.law")}</h3>
                  <p className="text-muted-foreground">Universidade Federal do Tocantins • 2007 - 2011</p>
                  <p className="mt-2 text-justify">
                    {t("about.education.law.description")}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("about.resume")}</h2>
              <p className="text-muted-foreground text-justify">
                {t("about.resume.description")}
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Button asChild>
                  <a href="/CV_ErionSchlengeDePaivaMaia.pdf" download>
                    <Download className="mr-2 h-4 w-4" />
                    {t("about.resume.download")}
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
} 