import React from "react"
import ContactSection from "./ContacSection/ContactSection";
import IntroSection from "./IntroSection/IntroSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import "./App.css"
function App() {
  return (
    <div className="App">
      <IntroSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

export default App;
