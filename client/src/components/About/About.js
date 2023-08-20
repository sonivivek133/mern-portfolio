import React from "react";
import "./about.css";
import PrfilePic from "../../assets/Images/Profilepic.jpeg";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <div>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                height="150px"
                width="150px"
                src={PrfilePic}
                alt="Profile Pic"
              />
            </div>
            <div className="col-md-6 about-content">
              <h1>About Me</h1>
              <p>
                My name is Vivek Soni. I originally hail from Madhya Pradesh. I
                have recently completed my B.Tech in Computer Science and
                Engineering from Lovely Professional University. During my
                academic journey, I had the opportunity to undertake two
                internships that have enhanced my skills and knowledge in the
                field. The first internship was with Stratbeans, where I worked
                as a frontend developer intern. This experience allowed me to
                gain proficiency in website programming languages such as HTML,
                CSS, JavaScript, and React. My second internship was with
                Highradius as a Product and Engineering intern. Here, I had the
                opportunity to work on an AI-enabled FinTech B2B Invoice
                Management Application, further enhancing my software
                development capabilities.Additionally, I have demonstrated my
                problem-solving skills by solving over 600 problems on various
                coding platforms, including LeetCode, GeeksforGeeks.. On the
                frontend, I am well-versed in HTML, CSS, JavaScript, React.js,
                and Redux. In the backend, I am skilled in Node.js, Express.js,
                EJS, and API development.Furthermore, I have hands-on experience
                with databases like MongoDB and MySQL. I have successfully
                completed projects such as InstastBanking and a Netflix replica.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </div>
  );
};

export default About;
