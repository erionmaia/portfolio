"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    "home.hello": "Olá, eu sou",
    "home.subtitle": "Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis",
    "home.contactButton": "Entre em Contato",
    "home.projectsButton": "Ver Projetos",
    "home.sellMySelf": "Sou um desenvolvedor Full Stack com experiência em diversas tecnologias e frameworks. Minha paixão é criar soluções inovadoras e eficientes que resolvam problemas reais. Tenho facilidade para aprender, trabalhar em equipe e resolver problemas de forma criativa. Se você procura alguém comprometido, comunicativo e com vontade de crescer junto, sou a escolha certa para sua empresa!",
    "home.testimonials": "O que dizem sobre mim?",
    "about.title": "Sobre Mim",
    "about.description": "Sou um desenvolvedor Full Stack com experiência em diversas tecnologias e frameworks. Minha paixão é criar soluções inovadoras e eficientes que resolvam problemas reais.",
    "about.description2": "Trabalho tanto no backend quanto no frontend, sempre com atenção à performance, à organização do código e, principalmente, à experiência do usuário. Gosto de resolver problemas com tecnologia e acredito que um bom software é aquele que faz sentido para quem usa.",
    "about.description3": "Sou movido pela curiosidade e pelo aprendizado constante. Gosto de entender como as coisas funcionam e procuro sempre melhorar — seja estudando novas ferramentas, escrevendo código mais limpo ou buscando formas mais eficientes de entregar valor em cada projeto.",
    "about.experience": "Experiência Profissional",
    "about.experience.riseio": "Atuei no desenvolvimento de aplicações web completas, com foco em funcionalidades para gerenciamento de espaços e usuários. Trabalhei com AngularJS no frontend e Node.js no backend, integrando APIs e otimizando a experiência do usuário. Participei de todo o ciclo do produto, da concepção à entrega.",
    "about.experience.rksam": "Fui responsável por automatizar e otimizar processos de coleta, análise e entrega de dados. Desenvolvi rotinas de integração entre sistemas e garanti a qualidade dos dados para relatórios estratégicos. Atuei próximo às áreas de negócio, traduzindo necessidades em soluções técnicas eficientes. Atuei ainda na criação de dashboards e relatórios para monitoramento e tomada de decisão, trabalhando no desenvolvimento web com HTML, CSS e JavaScript no frontend e Python no backend.",
    "about.education": "Educação",
    "about.education.computerScience": "Ciência da Computação",
    "about.education.computerScience.description": "Graduação em Ciência da Computação, abrangendo programação, sistemas de informação, redes de computadores, banco de dados, entre outros.",
    "about.education.dataScience": "Ciência de Dados",
    "about.education.dataScience.description": "Tecnologo em Ciência de Dados, abrangendo análise de dados, desenvolvimento de soluções de dados, entre outros.",
    "about.education.law": "Direito",
    "about.education.law.description": "Graduação em Direito, abrangendo todas as áreas do direito, como direito civil, penal, processual, entre outros.",
    "about.resume": "Currículo",
    "about.resume.description": "Para ver meu currículo completo, clique no botão abaixo.",
    "about.resume.download": "Baixar Currículo",
    "footer.description": "Desenvolvido por Erion Maia · © 2025 · Todos os direitos reservados.",
    "footer.developedBy": "Desenvolvido por",
    "footer.rights": "Todos os direitos reservados.",
    "skills.title": "Habilidades",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.testing": "Testes",
    "skills.description": "Ao longo da minha jornada na área de tecnologia, construí um conjunto sólido de habilidades técnicas que me permitem criar soluções completas, escaláveis e bem estruturadas. Tenho experiência com tecnologias modernas como JavaScript, TypeScript, Angular, React, Node.js, e bancos de dados relacionais como PostgreSQL.",
    "skills.description2": "Mais do que apenas conhecer ferramentas, procuro usá-las de forma estratégica para resolver problemas reais. Gosto de escrever código limpo, reutilizável e fácil de manter, sempre com foco na performance e na experiência do usuário.",
    "skills.description3": "Com essas habilidades, posso ajudar empresas a desenvolver produtos mais ágeis, automatizar processos, melhorar a interface de sistemas existentes e entregar soluções que realmente fazem a diferença no dia a dia do negócio.",
    "projects.title": "Projetos",
    "projects.viewCode": "Ver Código",
    "projects.viewLive": "Ver Projeto",
    "projects.description": "Aqui estão alguns dos meus principais projetos. Cada um deles representa um desafio único e uma oportunidade de aprendizado e crescimento profissional.",
    "contact.title": "Contato",
    "contact.description": "Entre em contato comigo através do formulário abaixo ou pelas minhas redes sociais.",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",
    "contact.success": "Mensagem enviada com sucesso!",
    "contact.error": "Erro ao enviar mensagem. Tente novamente.",
    "contact.sendMessage": "Enviar Mensagem",
    "contact.information": "Informações de Contato",
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "quiz.title": "Quiz Interativo",
    "quiz.q1": "Quanto é 2 + 2?",
    "quiz.q1.a": "2 + 2 = 2 + 2",
    "quiz.q1.b": "2²",
    "quiz.q1.c": "2 x 2",
    "quiz.q1.d": "4",
    "quiz.q2": "Qual dessas qualidades é essencial para um bom desenvolvedor?",
    "quiz.q2.a": "Trabalho em equipe",
    "quiz.q2.b": "Curiosidade",
    "quiz.q2.c": "Resiliência",
    "quiz.q2.d": "Comunicação",
    "quiz.q3": "O que não pode faltar em um projeto de sucesso?",
    "quiz.q3.a": "Colaboração",
    "quiz.q3.b": "Boas práticas",
    "quiz.q3.c": "Testes",
    "quiz.q3.d": "Documentação",
    "quiz.q4": "Qual dessas tecnologias faz parte do meu stack?",
    "quiz.q4.a": "React",
    "quiz.q4.b": "Node.js",
    "quiz.q4.c": "TypeScript",
    "quiz.q4.d": "Next.js",
    "quiz.allCorrect": "Todas as opções são corretas! ;)",
    "quiz.congrats": "Parabéns!",
    "quiz.prize": "Você ganhou o direito de me contratar! 🎉",
    "testimonial.billGates": "Erion é o tipo de desenvolvedor que eu gostaria de ter contratado na Microsoft (Teríamos menos bugs!). Full Stack de verdade!",
    "testimonial.linusTorvalds": "Nunca vi alguém resolver conflitos de merge tão bem quanto o Erion. Recomendo para qualquer projeto Open Source!",
    "testimonial.jamesGosling": "Se o Erion tivesse participado do time Java, já estaríamos no Java 30!",
    "testimonial.guidoVanRossum": "O código do Erion é tão limpo que parece até Pythonic!",
  },
  en: {
    "home.hello": "Hi, I'm",
    "home.subtitle": "Full Stack Developer passionate about creating amazing digital experiences",
    "home.contactButton": "Contact Me",
    "home.projectsButton": "View Projects",
    "home.sellMySelf": "I'm a Full Stack Developer with experience in various technologies and frameworks. My passion is creating innovative and efficient solutions that solve real problems. I have a knack for learning, working in teams, and solving problems creatively. If you're looking for someone committed, communicative, and willing to grow together, I'm the right choice for your company!",
    "home.testimonials": "What they say about me?",
    "about.title": "About Me",
    "about.description": "I'm a Full Stack Developer with experience in various technologies and frameworks. My passion is creating innovative and efficient solutions that solve real problems.",
    "about.description2": "I work both in the backend and in the frontend, always paying attention to performance, code organization, and, above all, the user experience. I like to solve problems with technology and believe that a good software is one that makes sense for the user.",
    "about.description3": "I'm driven by curiosity and constant learning. I like to understand how things work and always strive to improve — whether by studying new tools, writing cleaner code, or finding more efficient ways to deliver value in each project.",
    "about.experience": "Professional Experience",
    "about.experience.riseio": "I worked on the development of complete web applications, focusing on functionalities for space and user management. I worked with AngularJS in the frontend and Node.js in the backend, integrating APIs and optimizing the user experience. I participated in the entire product cycle, from conception to delivery.",
    "about.experience.rksam": "I was responsible for automating and optimizing data collection, analysis, and delivery processes. I developed integration routines between systems and ensured data quality for strategic reports. I worked closely with business areas, translating needs into efficient technical solutions. I also created dashboards and reports for monitoring and decision-making, working in web development with HTML, CSS, and JavaScript in the frontend and Python in the backend.",
    "about.education": "Education",
    "about.education.computerScience": "Computer Science",
    "about.education.computerScience.description": "Graduate degree in Computer Science, covering programming, information systems, computer networks, databases, and other areas.",
    "about.education.dataScience": "Data Science",
    "about.education.dataScience.description": "Technological degree in Data Science, covering data analysis, data solutions development, and other areas.",
    "about.education.law": "Law",
    "about.education.law.description": "Graduate degree in Law, covering all areas of law, such as civil law, penal law, procedural law, and other areas.",
    "about.resume": "Resume",
    "about.resume.description": "To see my complete resume, click the button below.",
    "about.resume.download": "Download Resume",
    "footer.description": "Developed by Erion Maia · © 2025 · All rights reserved.",
    "footer.developedBy": "Developed by",
    "footer.rights": "All rights reserved.",
    "skills.title": "Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.testing": "Testing",
    "skills.description": "Throughout my journey in the technology area, I built a solid set of technical skills that allow me to create complete, scalable, and well-structured solutions. I have experience with modern technologies like JavaScript, TypeScript, Angular, React, Node.js, and relational databases like PostgreSQL.",
    "skills.description2": "More than just knowing tools, I use them strategically to solve real problems. I like to write clean, reusable, and easy-to-maintain code, always with a focus on performance and user experience.",
    "skills.description3": "With these skills, I can help companies develop more agile products, automate processes, improve the interface of existing systems, and deliver solutions that really make a difference in the day-to-day of the business.",
    "projects.title": "Projects",
    "projects.viewCode": "View Code",
    "projects.viewLive": "View Live",
    "projects.description": "Here are some of my main projects. Each one represents a unique challenge and an opportunity for learning and professional growth.",
    "contact.title": "Contact",
    "contact.description": "Get in touch with me through the form below or through my social media.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.success": "Message sent successfully!",
    "contact.error": "Error sending message. Please try again.",
    "contact.sendMessage": "Send Message",
    "contact.information": "Contact Information",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "quiz.title": "Interactive Quiz",
    "quiz.q1": "How much is 2 + 2?",
    "quiz.q1.a": "2 + 2 = 2 + 2",
    "quiz.q1.b": "2²",
    "quiz.q1.c": "2 x 2",
    "quiz.q1.d": "4",
    "quiz.q2": "Which of these qualities is essential for a good developer?",
    "quiz.q2.a": "Teamwork",
    "quiz.q2.b": "Curiosity",
    "quiz.q2.c": "Resilience",
    "quiz.q2.d": "Communication",
    "quiz.q3": "What is essential for a successful project?",
    "quiz.q3.a": "Collaboration",
    "quiz.q3.b": "Best practices",
    "quiz.q3.c": "Testing",
    "quiz.q3.d": "Documentation",
    "quiz.q4": "Which of these technologies is part of my stack?",
    "quiz.q4.a": "React",
    "quiz.q4.b": "Node.js",
    "quiz.q4.c": "TypeScript",
    "quiz.q4.d": "Next.js",
    "quiz.allCorrect": "All options are correct! ;)",
    "quiz.congrats": "Congratulations!",
    "quiz.prize": "You have earned the right to hire me! 🎉",
    "testimonial.billGates": "Erion is the type of developer I would like to have hired at Microsoft (We would have fewer bugs!). Full Stack of truth!",
    "testimonial.linusTorvalds": "I've never seen anyone resolve merge conflicts as well as Erion. I recommend for any Open Source project!",
    "testimonial.jamesGosling": "If Erion had participated in the Java team, we would already be on Java 30!",
    "testimonial.guidoVanRossum": "The code of Erion is so clean that it even looks Pythonic!",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
} 