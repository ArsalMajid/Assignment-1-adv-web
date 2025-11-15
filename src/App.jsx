import React from "react";
import Header from "./components/Header.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import Certifications from "./components/Certifications.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div id="cv">
      <Header />
      <hr style={{ border: "none", borderTop: "2px solid black", margin: 0 }} />

      <main id="body">
        <SkillsSection />

        <div id="experience-certifications">
          <ExperienceSection />
          <Certifications />
        </div>
      </main>

      <hr style={{ border: "none", borderTop: "2px solid black", margin: 0 }} />
      <Footer />
    </div>
  );
};

export default App;
