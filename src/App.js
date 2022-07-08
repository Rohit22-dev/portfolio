import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context';
import {useContext} from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-scroll"
import MenuIcon from '@mui/icons-material/Menu';

 
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    style ={{
        background : darkMode? 'black': '',
        color : darkMode? 'white': ''
    }}
    > 
    <div className="menu-icon"><MenuIcon /></div>
    <Link spy={true} smooth={true} to='Navbar'>
      <div className="home-icon">
      <HomeIcon sx={{ fontSize: 50 }}/>
    </div></Link>
      <Navbar />
      <Intro />
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
