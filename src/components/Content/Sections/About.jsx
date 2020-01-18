import React from "react";
import jeffImg from "../../../images/jeff.jpg";

export default () => {
  return (
    <div className="about section-container">
      <div className="text-img-box">
        <p>
          Hello, my name is Jeff Manke and I am a Software Developer currently living in Victoria, BC.
          I have a Bachelor of Science, Double Major in Computer Science and Economics from the Univeristy of Victoria.
          Ever since I took Computer Science as my second major, I have been spending almost all of my time programming
          and learning new technologies. Whether its writing highly optimized and multithreaded C#/C++ code, or front end
          development with JavaScript and React.js, I love taking on new challenges and solving problems.
        </p>
        <img src={jeffImg} alt="Jeff Manke Hololens" className="paragraph-img" />
      </div>
    </div>
  );
}