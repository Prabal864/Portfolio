type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    resume: Required<TSection>;
    tech: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: "",
    fullName: "Prabal Pratap Singh",
    email: "prabal.singh0214@gmail.com",
  },
  hero: {
    name: "Prabal Pratap Singh",
    p: ["Architecting Scalable Backend Systems", "Developing Cloud-Native Microservices", "Building Secure Fintech Solutions", "Optimizing High-Performance APIs"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a results-driven Backend & Cloud Developer specializing in Java Spring Boot, Microservices, and DevOps. I engineer scalable, production-ready systems using Spring Cloud, Kafka, Kubernetes, Docker, and AWS/GCP. My expertise lies in delivering robust fintech and logistics platforms featuring secure APIs, asynchronous communication, and cloud-first architectures. I also pioneer AI-driven solutions, integrating SETU Account Aggregator and LLMs to generate real-time financial insights. My focus is on building systems that are not just functional, but fast, reliable, and built to scale.`,
    },
    experience: {
      p: "My Professional Journey",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects demonstrate my technical expertise and problem-solving capabilities through real-world examples. Each project is briefly described, including links to code repositories and live demos, showcasing my ability to tackle complex challenges, leverage diverse technologies, and deliver effective solutions.`,
    },
    resume: {
      p: "My Professional Background",
      h2: "Resume.",
      content: `Download my comprehensive resume showcasing my technical skills, work experience, and achievements in backend development, cloud architecture, and DevOps.`,
    },
    tech: {
      p: "MY ARSENAL",
      h2: "Tech Stack.",
      content: `I leverage a robust set of modern technologies to build scalable, high-performance applications. My expertise spans across backend development, cloud infrastructure, and DevOps practices, ensuring end-to-end delivery of secure and efficient solutions.`,
    },
  },
};
