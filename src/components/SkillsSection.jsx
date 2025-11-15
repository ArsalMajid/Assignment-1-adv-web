import React from "react";

const SkillsSection = () => {
  return (
    <div id="skills-section">
      <h3 style={{ marginTop: 0 }}>Languages</h3>
      <ul style={{ paddingLeft: "20px", marginTop: 0, color: "aliceblue" }}>
        <li>Python</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SQL</li>
      </ul>

      <h3>Frameworks</h3>
      <ul style={{ paddingLeft: "20px", color: "aliceblue" }}>
        <li>React</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Django</li>
      </ul>

      <h3>Tools</h3>
      <ul style={{ paddingLeft: "20px", color: "aliceblue" }}>
        <li>Git</li>
        <li>Docker</li>
        <li>AWS</li>
        <li>Heroku</li>
      </ul>

      <h3>Databases</h3>
      <ul style={{ paddingLeft: "20px", color: "aliceblue" }}>
        <li>MySQL</li>
        <li>MongoDB</li>
      </ul>
    </div>
  );
};

export default SkillsSection;
