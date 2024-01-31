import './HowWeWork.css'
import {useEffect, useRef} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const variants = {
  visible: { opacity: 1, translateY: 0 },
  hidden: { opacity: 0, translateY: 50 } // Adjust for desired effect
};

  
function HowWeWork() {

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
            id="how-we-work"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            <h2>How We work</h2>
            <p>Working closely with industry to define technology challenges and develop the transformational projects to tackle them, 
              encapsulating our ethos of supporting and transitioning to a more diverse energy industry centred on the North Sea. </p>
            <div class="stats">
              <div class="stat">
                  <h3>£176M</h3>
                  <p>co-invested with industry</p>
              </div>
              <div class="stat">
                  <h3>1,300+</h3>
                  <p>technologies screened</p>
              </div>
              <div class="stat">
                  <h3>20</h3>
                  <p>technologies commercialised</p>
              </div>
            </div>

            <div class="links">
              <a href="#">Our Ambition</a>
              <a href="#">Technology Roadmap 2035</a>
              <a href="#">Annual Report</a>
            </div>

            </motion.div>
        
        
    )
}

export default HowWeWork
