import React from "react";
import profileImage from "../assets/profile.png"; // Import image

const ProfilePic = () => {
  return (
    <div id="picture" style={{ display: "flex", flexDirection: "column" }}>
      {/*  */}
      <img
        src={profileImage}
        alt="Arsal Majid"
        width="200"
        height="250"
        style={{ padding: 0, border: "5px", borderColor: "black" }}
      />
    </div>
  );
};

export default ProfilePic;
