import React from 'react'
import Fade from 'react-reveal/Fade';
import { useTheme } from '../../context/ThemeContext';
import './home.css';
import Typewriter from 'typewriter-effect'
import Resume from '../../assets/docs/Vivek_Soni_Resume_02_Aug_2023.pdf'
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'

const Home = () => {
  const [theme,setTheme] = useTheme();
  //handle theme
  const handleTheme = () =>{
    setTheme((prevState) => (prevState === 'light' ? "dark" : "light"));
  }
  return (
    <div>
      <div className='container-fluid home-container' id="home">
      <div className="theme-btn" onClick={handleTheme}>
      {theme === "light" ? (<BsFillMoonStarsFill size={30}/>) : (<BsFillSunFill size={30}/>)}
      </div>
      <div className='container home-content'>

      <Fade right>
      <h2>Hi 👋 I'm a </h2>
      <h1>
         <Typewriter
         options={{
          strings: ["MERN STACK DEVELOPER", "SOFTWARE DEVELOPER"],
          autoStart : true,
          loop : true
         }}
         />
      </h1>
      </Fade>

      <Fade bottom>
        <div className="home-buttons">
        <a className="btn btn-hire"
         href="https://api.whatsapp.com/send?phone=6264299029"
         rel='noreferrer'
         target='_blank'>Hire Me</a>
        <a className="btn btn-cv" href={Resume} download="Vivek_Soni_Resume.pdf">My Resume</a>
        </div>
        </Fade>
      </div>
      </div>
    </div>
  )
}

export default Home