'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';

export default function ContactPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();
      if (resData.success) {
        setStatus('success');
        if (formRef.current) formRef.current.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t("contact.title")}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            {t("contact.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informações de Contato */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6 dark:text-white">{t("contact.information")}</h2>
              
              <div className="space-y-4">
                <Link
                  href="mailto:contato@erionmaia.dev"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{t("contact.email")}</span>
                </Link>

                <Link
                  href="https://www.instagram.com/erion_developer"
                  target="_blank"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>instagram.com/erion_developer</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/erionmaia"
                  target="_blank"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>linkedin.com/in/erionmaia</span>
                </Link>

                <Link
                  href="https://github.com/erionmaia"
                  target="_blank"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>github.com/erionmaia</span>
                </Link>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div className="bg-card p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 dark:text-white">{t("contact.sendMessage")}</h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Enviando...' : t("contact.send")}
                </button>
                {status === 'success' && (
                  <p className="text-green-600 mt-2 text-center">
                    Mensagem enviada com sucesso! Retornarei o contato em no máximo 48h.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 mt-2 text-center">
                    Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 