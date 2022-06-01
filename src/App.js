import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import "./App.css";
import ContactMe from "./ContactMe";
import { useEffect } from 'react'


function App() {
  useEffect(() => {
    document.title = "Portfolio"
  }, [])
  return (
    <div className="text-dark d-flex flex-column justify-content-center">
      <div>
        <HeroSection />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Skills/>
      </div>
      <div>
        <Portfolio/>
      </div>
      <div>
        <ContactMe/>
      </div>
    </div>
  );
}

export default App;
