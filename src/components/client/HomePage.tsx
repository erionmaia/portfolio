'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import profileImage from "@/assets/profile.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

export default function HomePage() {
  const { t } = useLanguage();

  // Quiz data traduzido
  const quizQuestions = [
    {
      question: t("quiz.q1"),
      options: [t("quiz.q1.a"), t("quiz.q1.b"), t("quiz.q1.c"), t("quiz.q1.d")],
    },
    {
      question: t("quiz.q2"),
      options: [t("quiz.q2.a"), t("quiz.q2.b"), t("quiz.q2.c"), t("quiz.q2.d")],
    },
    {
      question: t("quiz.q3"),
      options: [t("quiz.q3.a"), t("quiz.q3.b"), t("quiz.q3.c"), t("quiz.q3.d")],
    },
    {
      question: t("quiz.q3"),
      options: [t("quiz.q3.a"), t("quiz.q3.b"), t("quiz.q3.c"), t("quiz.q3.d")],
    },
  ];

  // Fake testimonials data
  const testimonials = [
    {
      name: "Bill Gates",
      role: "Co-fundador da Microsoft",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg",
      text: t("testimonial.billGates"),
    },
    {
      name: "Linus Torvalds",
      role: "Criador do Linux",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Linus_Torvalds.jpeg",
      text: t("testimonial.linusTorvalds"),
    },
    {
      name: "James Gosling",
      role: "Criador da linguagem Java",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEvFBGy4ZAox1LtosNPr4pXJHSL0eQCFCR96tcfHtPSi9sXzT2Nelnuq2V2-RrybHce-4n2M6ApWq26sKS7qgv-su-6huWL8SyEfP4sDZFg3O5pVP7Wwf1hJTZ1pNw5eFRoB_QRkqMul0/s1600/gosling+full.jpg",
      text: t("testimonial.jamesGosling"),
    },
    {
      name: "Guido van Rossum",
      role: "Criador do Python",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Guido_van_Rossum_OSCON_2006.jpg",
      text: t("testimonial.guidoVanRossum"),
    },
  ];

  const [quizStep, setQuizStep] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Autoplay para o carrossel de depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-6 dark:text-white">
             {t("home.hello")} <span className="text-blue-600">Erion Maia</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 dark:text-gray-100">
              {t("home.subtitle")}
            </p>
            <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-justify text-gray-500 dark:text-gray-300">
              {t("home.sellMySelf")}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {t("home.contactButton")}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src={profileImage}
                alt="Erion Maia"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Quiz Section - agora fora do bloco principal */}
        <section className="mt-16 mb-12 max-w-2xl mx-auto bg-card rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">{t("quiz.title")}</h2>
          {!quizFinished ? (
            <div>
              <p className="text-lg font-medium mb-4 text-center dark:text-gray-100">
                {quizQuestions[quizStep].question}
              </p>
              <div className="grid gap-4 mb-6">
                {quizQuestions[quizStep].options.map((option, idx) => (
                  <button
                    key={option}
                    className="w-full bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 text-primary font-semibold py-2 px-4 rounded-lg transition-colors"
                    onClick={() => {
                      if (quizStep < quizQuestions.length - 1) {
                        setQuizStep(quizStep + 1);
                      } else {
                        setQuizFinished(true);
                      }
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="text-center text-sm text-muted-foreground">
                {t("quiz.allCorrect")}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">{t("quiz.congrats")}</h3>
              <p className="mb-2 text-lg dark:text-white">{t("quiz.prize")}</p>
              <span className="text-3xl">🥳</span>
            </div>
          )}
        </section>

        {/* Fake Testimonials Section - agora em carrossel */}
        <section className="mt-16 mb-24 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">{t("home.testimonials")}</h2>
          <div className="relative flex flex-col items-center">
            <div className="w-full flex flex-col items-center bg-card rounded-lg shadow p-6 text-center dark:bg-zinc-800 transition-all duration-500">
              <img src={testimonials[testimonialIndex].image} alt={testimonials[testimonialIndex].name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary/30 mx-auto" />
              <h3 className="text-lg font-bold dark:text-white">{testimonials[testimonialIndex].name}</h3>
              <span className="text-sm text-muted-foreground mb-2">{testimonials[testimonialIndex].role}</span>
              <p className="text-base dark:text-gray-100">“{testimonials[testimonialIndex].text}”</p>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full ${idx === testimonialIndex ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 