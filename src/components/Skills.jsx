import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';

// ****** SASS *********
import '../scss/skills.scss';
// ****** ASSETS *********
import skill1 from '../assets/skill-01.png';
import skill2 from '../assets/skill2-01.png';
import skill3 from '../assets/skill3-01.png';

const Skills = () => {
    return (
        <AnimatePresence>
            <motion.section className="skills" initial={{opacity: 0.5 }} animate={{opacity: 1}} transition= {{stiffness: 120}}  exit= {{opacity: 0.5}}>
                
                <div className="skills-grid">
                    <div className="l1c1">
                        <img src={skill1} alt="" />
                        <h1>Oil Painting</h1>
                    </div>
                    <div className="l1c2">
                        <div className="circle"></div>
                    </div>
                    <div className="l1c3">
                        <img src={skill2} alt="" />
                        <h1>Portrait Drawing</h1>
                    </div>
                    <div className="l2c1">
                        <div className="circle"></div>

                    </div>
                    <div className="l2c2">
                        <img src={skill3} alt="" />
                        <h1>Geomitrical Design</h1>
                    </div>
                    <div className="l2c3">
                        <div className="circle"></div>

                    </div>
                </div>

                <div className="fixed-skills">
                    <h1>SKILLS</h1>
                </div>
            </motion.section>
        </AnimatePresence>
    )
}

export default Skills
