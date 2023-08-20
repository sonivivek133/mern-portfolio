import React from "react";
import HeadShake from "react-reveal/HeadShake";
import Fade from "react-reveal/Fade";
import "./techstack.css";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <div>
      <div className="container techstack" id="techstack">
        <HeadShake>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            {" "}
            Technologies Stack{" "}
          </h2>
          <hr />
          <p className="pd-3 text-center">
            👉 Including Programming Languages, frameworks, databases, front-end
            and back-end tools, and APIs
          </p>
        </HeadShake>
        <div className="row">
          {TechstackList.map((tech) => (
            <Fade right>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          {["C++", "C", "OOPS", "DSA","UI","UX"].includes(tech.name) ? (
                            tech.icon
                          ) : (
                            <tech.icon className="tech-icon" />
                          )}
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techstack;
