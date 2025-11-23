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
  };
};

export const config: TConfig = {
  html: {
    title: "Prabal Pratap Singh Portfolio",
    fullName: "Prabal Pratap Singh",
    email: "prabal.singh0214@gmail.com",
  },
  hero: {
    name: "Prabal Pratap Singh",
    p: ["I build scalable backend systems", "and cloud-native microservices"],
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
      content: `I am a Backend & Cloud Developer specializing in Java Spring Boot, Microservices, and DevOps. I build scalable, production-ready systems using Spring Cloud, Kafka, Kubernetes, Docker, and AWS/GCP. My experience includes delivering fintech and logistics platforms with secure APIs, async communication, and cloud-first architectures. I’ve also built AI-driven solutions integrating SETU Account Aggregator and LLMs for real-time financial insights. I focus on creating systems that are fast, reliable, and optimized for scale.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
    resume: {
      p: "My Professional Background",
      h2: "Resume.",
      content: `Download my comprehensive resume showcasing my technical skills, work experience, and achievements in backend development, cloud architecture, and DevOps.`,
    },
  },
};
