import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Benefits001 from "../HomePage/images/benefits001.jpg";

const Benefits = () => {
  const animationControls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      animationControls.start({
        opacity: 1,
        transition: { duration: 3, ease: 'easeInOut' }
      });
    }
  }, [animationControls, inView]);

  return (
    <div className='main flex'>
      <div ref={ref} className="left w-1/2">
        <motion.img src={Benefits001} alt="" style={{ opacity: 0 }} animate={animationControls} />
      </div>

      <div ref={ref} className="right w-1/2">
        <div className="text">
          <motion.h1 className='text-4xl text-center mx-5 font-semibold text-blue-400' style={{ opacity: 0 }} animate={animationControls}>
            How it Helps in pg management
          </motion.h1>
          <motion.div className="para" style={{ opacity: 0 }} animate={animationControls}>
            <p className='mx-5 my-10 text-wrap'>
              A PG management service like "PG Perfect" benefits greatly from a website that records income, expenses, and tenant complaints. This digital platform streamlines operations by offering real-time financial insights, aiding in budgeting and cost control. Additionally, it facilitates efficient complaint management, ensuring quick issue resolution and enhancing tenant satisfaction. Overall, "PG Perfect" website optimizes PG management, fostering transparency, organization, and responsiveness.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;