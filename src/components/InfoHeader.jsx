import React from "react";

const InfoHeader = () => {
  return (
    <div
      className="name-container"
      style={{
        display: "flex",
        flexDirection: "column",
        color: "black",
        textAlign: "center",
        marginLeft: "250px", 
      }}
    >
      <h1 style={{ margin: 0 }}>Arsal Majid</h1>
      <h3 style={{ margin: "5px 0", color: "aliceblue" }}>
        <span style={{ color: "rgb(29, 102, 81)" }}>
          {" "}
          Software Engineer | Web Developer | Machine Learning Engineer{" "}
        </span>
      </h3>
      <p style={{ margin: "5px 0", color: "aliceblue" }}>
        <span>Email:</span> arsalmajid6@gmail.com <br />
        <span>Phone:</span> +92 322 4150800 <br />
        <span>LinkedIn:</span>
        <a
          href="https://www.linkedin.com/in/arsal-majid/"
          target="_blank"
          style={{ color: "purple", textDecoration: "underline" }}
        >
          Arsal-Majid
        </a>
        <br />
        <span>GitHub:</span>
        <a
          href="https://github.com/ArsalMajid"
          target="_blank"
          style={{ color: "purple", textDecoration: "underline" }}
        >
          Arsal Majid
        </a>
      </p>

      {/* Professional Summary */}
      <h2 style={{ margin: "10px 0 5px 0", color: "black" }}>
        Professional Summary:
      </h2>
      <p style={{ margin: 0, color: "aliceblue" }}>
        Enthusiastic and dedicated software engineer with a strong foundation{" "}
        <br />
        in computer science and hands-on experience. Proficient in web
        development
        <br />
        and machine learning. Eager to contribute technical skills and
        creativity.
      </p>
    </div>
  );
};

export default InfoHeader;