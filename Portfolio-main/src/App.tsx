import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Footer,
  Resume,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative z-0 min-h-screen flex flex-col bg-[linear-gradient(180deg,#eff6ff_0%,#faf5ff_10%,#fdf2f8_20%,#f0fdfa_30%,#fff7ed_45%,#f8fafc_60%,#fff1f2_75%,#ecfdf5_85%,#eef2ff_100%)] dark:bg-none dark:bg-primary transition-colors duration-300">
          {/* Hero Section */}
          <div className="dark:bg-hero-pattern dark:bg-cover dark:bg-center dark:bg-no-repeat">
            <Navbar />
            <Hero />
          </div>
          
          {/* Main Content */}
          <div className="flex-grow">
            <About />
            <Experience />
            <Tech />
            <Works />
            <Resume />
            <Feedbacks />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
