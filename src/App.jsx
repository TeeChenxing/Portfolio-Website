import { BrowserRouter } from "react-router-dom";
import darkBg from "./assets/darkbg.gif";

import {
  About,
  Contact,
  Experience,
  Quotes,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div
          className="relative z-0 bg-cover bg-primary"
          style={{
            backgroundImage: `url(${darkBg})`,
            backgroundAttachment: "fixed",
          }}
        >
          <About />
          <Experience />
          <Tech />
          <Projects />
          <Quotes />
        </div>
        <div className="relative z-0 w-full mx-auto">
          <Contact className="flex-grow" />
          <StarsCanvas className="flex-grow" />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
