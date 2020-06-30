import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';

// ************ SASS ******** 
import '../scss/projects.scss';

// ************ IMAGES ****** 
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

const Projects = () => {
    const imgs = [img1, img2, img3];
    const [selected, setSelected] = useState(2);

    const onPrev = () => {
        setSelected((selected - 1 + imgs.length) % imgs.length);
    }
    const onNext = () => {
        setSelected((selected + 1) % imgs.length);
    }
    return (
        <AnimatePresence>
            <motion.section className="projects" initial={{opacity: 0.5 }} animate={{opacity: 1 }} transition= {{stiffness: 120 }}   exit= {{opacity: 0.5}}>
                
                <div className="projects-content">
                    <motion.button className="prev" onClick={() => onPrev()}>prev</motion.button>
                    <motion.img   src={imgs[selected]} alt="" />
                    <motion.button className="next" onClick={() => onNext()}>next</motion.button>
                </div>

                <div className="fixed-projects">
                    <h1>PROJECTS</h1>
                </div>
            </motion.section>
        </AnimatePresence>
    )
}

export default Projects
