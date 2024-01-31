import './WhatWeDo.css'
import {useEffect, useRef} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const variants = {
  visible: { opacity: 1, translateY: 0 },
  hidden: { opacity: 0, translateY: 50 } // Adjust for desired effect
};

  
function StatsSection() {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5 // Adjust as needed to control when the animation triggers
      });

      
    const controls = useAnimation();


    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

      
    return (
        
        <motion.div
            id="what-we-do"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            <h2>What We Do</h2>
            <p>We work with our partners on reducing carbon emissions to net zero, 
                seizing the opportunity to inspire creativity, drive innovation, 
                and secure support needed to deliver sustainable energy long term. </p>
            
            <div className='links'>
                <a>Technology <span className='right-arrow'>&#10132;</span></a>
                <a>Parnterships <span className='right-arrow'>&#10132;</span></a>
                <a>Thought leadership <span className='right-arrow'>&#10132;</span></a>
                <a>Programmers <span className='right-arrow'>&#10132;</span></a>
                <a>Research & Academia <span className='right-arrow'>&#10132;</span></a>
                <a>Networking <span className='right-arrow'>&#10132;</span></a>
                <a>Reports & Publications <span className='right-arrow'>&#10132;</span></a>
                <a>Events <span className='right-arrow'>&#10132;</span></a>
                <a>Projects <span className='right-arrow'>&#10132;</span></a>
            </div>
            </motion.div>
        
        
    )
}

export default StatsSection
