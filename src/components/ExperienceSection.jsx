import React from "react";

const ExperienceSection = () => {
  return (
    <div id="experience-box" className="experience-box">
      <h2 style={{ marginTop: 0, fontStyle: "italic" }}>Experience:</h2>

      <h3 style={{ marginBottom: "5px", color: "blueviolet" }}>
        Software Engineer Intern | Tech Solutions
      </h3>
      <p style={{ margin: "0 0 10px 0", color: "blue" }}>
        <i>June 2023 - August 2023</i>
      </p>
      <ul
        style={{
          paddingLeft: "20px",
          color: "aliceblue",
          marginBottom: "10px",
        }}
      >
        <li>
          Developed and maintained web applications using React and Node.js.
        </li>
        <li>
          Collaborated with cross-functional teams to design and implement new
          features.
        </li>
        <li>
          Optimized application performance, resulting in a 20% reduction in
          load times.
        </li>
      </ul>

      <h3 style={{ marginBottom: "5px", color: "blueviolet" }}>
        Machine Learning Intern | Data Insights
      </h3>
      <p style={{ margin: "0 0 10px 0px", color: "blue" }}>
        <i>January 2023 - May 2023</i>
      </p>
      <ul style={{ paddingLeft: "20px", color: "aliceblue" }}>
        <li>
          Assisted in developing machine learning models for predictive
          analytics.
        </li>
        <li>
          Conducted data preprocessing and feature engineering to improve model
          accuracy.
        </li>
        <li>
          Utilized Python libraries such as Pandas, NumPy, and Scikit-learn for
          data analysis.
        </li>
      </ul>
    </div>
  );
};

export default ExperienceSection;
