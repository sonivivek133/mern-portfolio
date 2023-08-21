import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Education";
import WorkExp from "./pages/WorkExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import LightSpeed from 'react-reveal/LightSpeed';
import { useTheme } from "./context/ThemeContext";
import { MobileNav } from "./components/MobileNav/MobileNav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [theme] = useTheme()
  return (
    <>
    <div id={theme}>
    <ToastContainer/>
    <MobileNav/>
    <div>
      <Layout/>
      <About/>
      <Education/>
      <Techstack/>
      <Projects/>
      <WorkExp/>
      <Contact/>
    </div>
    <LightSpeed>
     <footer>
      <h4 className="footer text-center pb-3 ms-3">
      Made By Vivek Soni &copy; 2023
      </h4>
     </footer>
     </LightSpeed>
     </div>
     <ScrollToTop smooth color="cyan" style={{backgroundColor:'#1e1e2c'}}/>

    </>
  );
}

export default App;
