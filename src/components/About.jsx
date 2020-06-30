import React , {useEffect , useRef , useState} from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap'; 

// ************** SASS ************ 
import '../scss/about.scss';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
const About = () => {
    
    return (
        <AnimatePresence>
            <motion.section className="about" initial={{opacity: 0.5}} animate={{opacity: 1}} transition= {{stiffness: 120}}  exit= {{opacity: 0.5}}>
                

                <div className="about-content">
                    <div className="caroussel">
                        <motion.img src={img2} alt="" />
                        <motion.img src={img3} alt="" />
                        <motion.img src={img1}  alt="" />
                    </div>
                    <div className="text-div">
                        <h1>ARTIST PAINTER</h1>
                        <p>The person driven by passion <br /> never stops </p>
                    </div>
                </div>

                <div className="fixed-name">
                    <h1>MICHELLE</h1>
                </div>

            </motion.section>
        </AnimatePresence>
    )
}

export default About
