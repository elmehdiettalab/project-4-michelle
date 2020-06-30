import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';

//  ******* SASS ****** 
import '../scss/contact.scss';
const Contact = () => {
    return (
        <AnimatePresence>
            <motion.section className="contact"  initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ stiffness: 120 }} exit={{ opacity: 0.5}}>
                
                <div className="form-wrapper">
                    <div className="form">
                        <input type="text" placeholder="firstname" />
                        <input type="text" placeholder="lastname" />
                        <input type="email" placeholder="email" />
                        <textarea name="" id="" placeholder="your message ..."></textarea>
                        <motion.input whileTap={{scale:.8}} whileHover={{boxShadow: '0 5px 5px rgba(0 , 0 , 0 , .5)'}} type="submit" value="SEND" />
                    </div>
                </div>

                <div className="fixed-contact">
                    <h1>
                        CONTACT
                </h1>
                </div>
            </motion.section>
        </AnimatePresence>
    )
}

export default Contact
