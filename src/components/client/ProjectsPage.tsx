'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Meus Eventos (Frontend)",
    description: "Aplicação frontend para gerenciamento de eventos com interface moderna e responsiva",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Context API"],
    githubUrl: "https://github.com/erionmaia/meus-eventos-frontend",
    liveUrl: null,
  },
  {
    title: "Meus Eventos (Backend)",
    description: "API RESTful para gerenciamento de eventos com autenticação e autorização",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?w=800&auto=format&fit=crop&q=60",
    technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/erionmaia/meus-eventos-backend",
    liveUrl: null,
  },
  {
    title: "Consulta na Hora (Frontend)",
    description: "Interface moderna para agendamento de consultas médicas",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    githubUrl: "https://github.com/erionmaia/consulta-na-hora-frontend",
    liveUrl: null,
  },
  {
    title: "Consulta na Hora (Backend)",
    description: "API para gerenciamento de agendamentos médicos e prontuários",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=60",
    technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/erionmaia/consulta-na-hora-backend",
    liveUrl: null,
  },
  {
    title: "API CID",
    description: "API para consulta de CIDs (Classificação Internacional de Doenças)",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60",
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/erionmaia/API_CID",
    liveUrl: null,
  },
  {
    title: "Chess System Project",
    description: "Sistema de xadrez desenvolvido em Java com interface gráfica",
    image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800&auto=format&fit=crop&q=60",
    technologies: ["Java", "Swing", "OOP"],
    githubUrl: "https://github.com/erionmaia/ChessSystemProject-java",
    liveUrl: null,
  }
];

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            {t("projects.title")}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12 text-justify dark:text-gray-100">
            {t("projects.description")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 dark:text-white">{project.title}</h2>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      {t("projects.viewCode")}
                    </Link>
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t("projects.viewLive")}
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 