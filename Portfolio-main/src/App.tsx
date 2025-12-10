import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
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
        <div className="relative z-0 min-h-screen flex flex-col bg-modern-dark transition-colors duration-300">
          {/* Hero Section */}
          <div>
            <Navbar />
            <Hero />
          </div>
          
          {/* Main Content */}
          <div className="flex-grow">
            <About />
            <Tech />
            <Works />
            <Experience />
            <Resume />
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
