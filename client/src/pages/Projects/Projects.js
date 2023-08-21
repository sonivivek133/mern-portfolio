import React from "react";
import "./Projects.css";
import InstanBookingFrontPage from "../../assets/Images/InstantBookingFrontPage.png";
import NetflixReplicaFrontPage from "../../assets/Images/NetflixReplicaFrontPage.png"
import MERN_Portfolio from '../../assets/Images/MERN_Portfolio.png'
const Projects = () => {
  return (
    <div>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 ms-2 text-center text-uppercase">
          {" "}
          TOP RECENT PROJECTS{" "}
        </h2>
        <hr />
        
        {/* card design */}

        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={InstanBookingFrontPage} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">MongoDB</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">InstatBooking</h5>
                </div>
              </div>
              <h5
                style={{
                  width: 350,
                  display: "flex",
                  justifyContent: "space-between",
                  height: 400,
                  flexDirection:"column",
                  marginLeft:20
                
                }}
              >
                • InstantBooking is
                a Hotel Reservation/Booking Application built using React.Js, Node.Js,
                Express, MongoDB, ejs, Mongoose, ContextAPI, JWT, custom hooks,
                and React calendar. 
                
                <hr style={{color:"white"}} />
                • We can give Search Inputs and Price Range
                and it will fetch the List containing full hotel information
                with images and also calculates the price according to date
                range and room numbers.It has many functionalities like
                Authentication (Login / Register) etc. It also has an Admin
                Dashboard and we will be able to delete items and create new
                ones
              </h5>
              <a
                className="ad-btn"
                href="https://booking-client-two.vercel.app/"
              >
                View
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={NetflixReplicaFrontPage} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">FireBase</span>
                <span className="card-detail-badge">API</span>
              
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">NetFlix Replica</h5>
                </div>
              </div>
              <h5
                style={{
                  width: 350,
                  display: "flex",
                  justifyContent: "space-between",
                  height: 400,
                  flexDirection:"column",
                  marginLeft:20
                
                }}
              >
              • It is a Functional Clone of Netflix Website built using React JS as a Front-end
              and Firebase as a Back-end to watch our favorite movies and series. It uses
              TMDB Api to get movies
                
                <hr style={{color:"white"}} />
              • It enables the users to view the Top-Rated Movies worldwide along with Trending and Netflix Originals
                <hr style={{color:"white"}} />
              • Users can click on the movie and watch the trailer and site is responsive , accessible and Deployed
                
              </h5>
              <a
                className="ad-btn"
                href="https://netflix-clone-c717d.web.app/"
              >
                View
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={MERN_Portfolio} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">MERN Portfolio</h5>
                </div>
              </div>
              <h5
                style={{
                  width: 350,
                  display: "flex",
                  justifyContent: "space-between",
                  height: 400,
                  flexDirection:"column",
                  marginLeft:20
                
                }}
              >
                • It is a DYNAMIC MERN Portfolio built using React Js, Node Js and Express.
                
                <hr style={{color:"white"}} />
                • The interface features an expandable and collapsible sidebar.By clicking on the icons within the sidebar, users can navigate to various sections seamlessly.Additionally, the interface boasts Impressive Animation Effects.
 
                <hr style={{color:"white"}} />

                • On the contact page, individuals have the option to Send me an Email by clicking the "Send Message" button and It is responsive also.
              </h5>
              <a
                className="ad-btn"
                href="https://mern-portfolio-main.vercel.app/"
              >
                View
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
