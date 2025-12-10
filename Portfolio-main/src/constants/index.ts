import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  kubernetes,
  nodejs,
  redis,
  docker,
  carrent,
  jobit,
  tripguide,
  mysql,
  springboot,
  java,
  grafana,
  prometheus,
  jenkins,
  postgresql,
  techeazy,
  liverecondemo
} from "../assets";


export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Backend Engineering",
    icon: backend,
    description: "I architect and build high-performance, scalable backend systems using Java, Spring Boot, and Microservices patterns. My focus is on creating secure, fault-tolerant APIs that power complex business logic.",
  },
  {
    title: "Cloud & DevOps",
    icon: creator,
    description: "Expertise in AWS, Docker, and Kubernetes. I design cloud-native infrastructures with automated CI/CD pipelines to ensure rapid and reliable deployment cycles.",
  },
  {
    title: "AI Integration",
    icon: mobile,
    description: "Leveraging LLMs and RAG architectures to build intelligent applications. I integrate advanced AI capabilities to derive actionable insights from data.",
  },
  {
    title: "Technical Arsenal",
    icon: web,
    description: "Proficient in a wide range of technologies including Java, Spring Boot, React, TypeScript, PostgreSQL, and modern DevOps tools. I choose the right tool for the job to deliver optimal results.",
  },
];

const technologies: TTechnology[] = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Grafana",
    icon: grafana,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Prometheus",
    icon: prometheus,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "CI/CD",
    icon: redis,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "PosgreSQL",
    icon: postgresql,
  },
];

const experiences: TExperience[] = [
  
  {
    title: "Independent Backend Developer",
    companyName: "Independent Project",
    icon: techeazy,
    iconBg: "#383E56",
    date: "Oct 2025 - Present",
    points: [
      "Engineered a production-grade fintech platform that fetches multi-bank accounts & transactions via SETU AA and generates AI-based financial insights.",
      "Developed a high-precision AI insights engine (RAG + LLM) for spending patterns & credit intelligence, achieving 90%+ accuracy.",
      "Architected and deployed scalable cloud infrastructure on AWS EC2, S3, and DynamoDB, maintaining 99.9% uptime across 15+ services handling 50K+ daily transactions.",
      "Implemented scalable inter-service communication with OpenFeign and token-based OAuth 2.0, reducing authentication latency by 35% and decreasing service failure rates from 10% to under 1% in high-traffic scenarios.",
      "Designed secure microservices with Spring Boot, JWT, and async processing, supporting 10K+ monthly users."
    ],
  },
  {
    title: "Backend & DevOps Intern",
    companyName: "TechEazy Consulting",
    icon: techeazy,
    iconBg: "#383E56",
    date: "July 2025 - October 2025",
    points: [
      "Collaborated on the design and deployment of the Zero Mile Delivery System, reducing API response times by 35% and increasing scalability by 40% through optimized microservices architecture.",
      "Built robust CI/CD pipelines with GitHub Actions using Bash Scripting, cutting deployment time by 70%.",
      "Architected and deployed scalable cloud infrastructure on AWS EC2, S3, and DynamoDB, maintaining 99.9% uptime across 15+ services handling 50K+ daily transactions.",
      "Built scalable inter-service communication with OpenFeign and token-based OAuth 2.0, reducing authentication latency by 35% and decreasing service failure rates from 10% to under 1% in high-traffic scenarios.",
      "Leveraged AWS Athena for real-time analytics on delivery efficiency and driver performance, enabling data-driven operational improvements that reduced SLA breaches by 30%."
    ],
  },
  
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  
  {
    name: "LiveReconAI",
    description:
      "LiveReconAi is an advanced real-time intelligence and analytics platform designed to continuously monitor data streams, detect anomalies, and generate actionable insights using AI-driven analysis. Built with scalable microservices and cloud-native architecture, it integrates seamlessly with fintech systems, operational workflows, and API-based data sources to provide instant decision support.The platform leverages machine learning models, event-driven pipelines, and automated reasoning to analyze transactions, user behavior, logs, and operational metrics in real time.",

    tags: [
      {
        name: "RAG",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/prabal864/LiveReconAI-frontend",
    liveLink: "https://livereconai.netlify.app",
    demo: liverecondemo,
  },
  {
    name: "Phoenix-sps",
    description:
      "Phoenix-SPS is a full-stack ChatGPT clone leveraging Node.js, React, MongoDB, and OpenAI APIs, packaged with Docker and automated through CI/CD pipelines.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/prabal864/Phoenix-sps",
    liveLink: "https://phoenixsps.netlify.app",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
    liveLink: "https://livereconai.netlify.app",
  }
];

export { services, technologies, experiences, testimonials, projects };
