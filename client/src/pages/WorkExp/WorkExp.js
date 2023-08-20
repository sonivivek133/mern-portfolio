import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <div>
      <div className="work" id="workexperience">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            {" "}
            Work Experience{" "}
          </h2>
          <hr />

          <VerticalTimeline lineColor="#138781">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "138781" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="2022 - 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                FRONTEND DEVELOPER INTERN
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                STRATBEANS{" "}
              </h4>
              <span>( MAY 2022 – AUG 2022 | REMOTE )</span>
              <p>
                • Develop Proficiency in website programming languages such as
                HTML, CSS, JavaScript and React to build real-life businesses
                and also learned responsiveness.
                <hr />• Learn how to maintain workflow using project management
                tools(like GitHub and Git) also Learn about UI, UX and tools
                like Figma and Adobe XD{" "}
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date="2022 - 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                SOFTWARE DEVELOPER INTERN{" "}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                HIGHRADIUS{" "}
              </h4>
              <span>( JAN 2022 – APR 2022 | REMOTE )</span>

              <p>
              • During this internship, I have successfully built an AI-Enabled
              Fintech B2B Invoice Management Application.
              <hr />• During this project I was involved in creating a
              full-stack web-based product thereby developing a deep
              understanding of all aspects of product development
              </p>
             
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;
