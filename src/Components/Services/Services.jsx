import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf"
import {themeContext} from '../../Context';
import {useContext} from "react";
import { motion } from "framer-motion";


const Services = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: "spring" };

  return (
    <div className="services" id="Services">

      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>services</span>
        <span>Lorem ipsum is simpley dummy text of printing of printing Lorem
          <br/>
          ispum is simpley dummy text of printing
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
      </div>


      <div className="cards">
        <motion.div 
        initial={{ left: "28rem" }}
        whileInView={{ left: "23rem" }}
        transition={ transition }
        style={{left: '23rem'}}>
          <Card
            emoji= {HeartEmoji}
            heading= 'Design'
            detail= {"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
          />
        </motion.div>
        <motion.div 
        initial={{ left: "-2rem" }}
        whileInView={{ left: "5rem" }}
        transition={ transition }
        style={{top:"12rem", left:"5rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, Javascript, React, Node, Mongo"}
          />
        </motion.div>
        <motion.div 
        initial={{ left: "28rem" }}
        whileInView={{ left: "21rem" }}
        transition={ transition }
        style={{top:"19rem", left:"21rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum is dummy text are usually use in section where we need some random text"}
          />
        </motion.div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
      </div>
      
    </div>
  )
}

export default Services
