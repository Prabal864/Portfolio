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
  techeazy
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud & DevOps",
    icon: creator,
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
    title: "Backend & DevOps Intern",
    companyName: "TechEazy Consulting",
    icon: techeazy,
    iconBg: "#383E56",
    date: "July 2025 - October 2025",
    points: [
      "Collaborated on the design and deployment of Zero Mile Delivery System, reducing API response times by 35% and increasing scalability by 40% through optimized microservices architecture.",
      "Built CI/CD pipelines with GitHub Actions using Bash Scripting, cutting deployment time by 70%",
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
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
