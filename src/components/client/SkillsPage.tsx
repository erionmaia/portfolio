"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Code2, 
  Database, 
  Globe, 
  Layers, 
  Server, 
  Smartphone,
  Terminal,
  GitBranch,
  TestTube2,
  Shield
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "AngularJS", level: 85 },
      { name: "Angular", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "React", level: 70 },
      { name: "Next.js", level: 60 },
    ]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 70 },
      { name: "Java", level: 55 },
      { name: "Python", level: 50 },
      { name: "Fast API", level: 50 },
      { name: "Spring Boot", level: 50 },
      { name: "Spring Security", level: 45 },
    ]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 70 },
    ]
  },
  {
    category: "DevOps",
    icon: <Terminal className="w-6 h-6" />,
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 65 },
      { name: "AWS", level: 60 },
      { name: "Resend", level: 60 },
      { name: "Cloudflare Pages", level: 60 },
    ]
  },
  {
    category: "Mobile",
    icon: <Smartphone className="w-6 h-6" />,
    skills: [
      { name: "React Native", level: 75 },
      { name: "Expo", level: 70 },
    ]
  },
  {
    category: "Testing",
    icon: <TestTube2 className="w-6 h-6" />,
    skills: [
      { name: "Jest", level: 80 },
      { name: "React Testing Library", level: 75 },
      { name: "Cypress", level: 65 },
      { name: "JUnit", level: 50 },
      { name: "Mockito", level: 50 },
    ]
  },
  {
    category: "Version Control",
    icon: <GitBranch className="w-6 h-6" />,
    skills: [
      { name: "GitHub", level: 85 },
      { name: "GitLab", level: 75 },
    ]
  },
  {
    category: "Security",
    icon: <Shield className="w-6 h-6" />,
    skills: [
      { name: "JWT", level: 80 },
      { name: "OAuth", level: 70 },
      { name: "HTTPS", level: 85 },
    ]
  }
];

export default function SkillsPage() {
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
          <h1 className="text-4xl text-blue-600 md:text-5xl font-bold mb-8 dark:text-white">
            {t("skills.title")}
          </h1>
          
          <p className="text-lg text-muted-foreground text-justify">
            {t("skills.description")}
          </p>
          <br />
          <p className="text-lg text-muted-foreground text-justify">
            {t("skills.description2")}
          </p>
          <br />
          <p className="text-lg text-muted-foreground text-justify">
            {t("skills.description3")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h2 className="text-xl font-semibold mb-4 dark:text-white">{category.category}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium dark:text-white">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 