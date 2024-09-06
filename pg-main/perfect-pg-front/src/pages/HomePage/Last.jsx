import React from 'react';
import { motion, useAnimation, useViewportScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedPoints = ({ points }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 2 },
      });
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="points space-y-4">
      {points.map((point, index) => (
        <motion.h1
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={controls}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center shadow-lg"
        >
          {point}
        </motion.h1>
      ))}
    </div>
  );
};

const Last = () => {
  const controls = useAnimation();
  const { scrollY, scrollYProgress } = useViewportScroll();
  const translateY = useTransform(scrollY, [0, 1], [0, -100]);
  const parallaxRange = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const mainTitleControls = useAnimation();
  const [mainTitleRef, mainTitleInView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (mainTitleInView) {
      mainTitleControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 2 },
      });
    }
  }, [mainTitleControls, mainTitleInView]);

  return (
    <div className='main p-8'>
      <motion.h1
        ref={mainTitleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={mainTitleControls}
        className='first-text text-center text-5xl font-bold mb-20'
        style={{ zIndex: 1 }}
      >
        Upgrade your business <span className='text-blue-600'>Today!!!</span>
      </motion.h1>
      <div className="compare flex justify-between mt-40 ">
        <motion.div
          style={{ translateY, zIndex: 0 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="m-2 left w-1/2 flex flex-col space-y-4 bg-blue-300 rounded-lg p-6 shadow-2xl"
        >
          <h1 className='text-center text-2xl font-semibold mb-4'>PG Verified with PG-perfect</h1>
          <AnimatedPoints points={[
            "Online Booking",
            "Easy Reconciliation",
            "Property Maintenance",
            "One platform, All services"
          ]} />
        </motion.div>

        <motion.div
          style={{ translateY, zIndex: 0 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="m-2 right w-1/2 flex flex-col space-y-4 bg-gray-300 rounded-lg p-6 shadow-2xl" // Changed background color
        >
          <h1 className='text-center text-2xl font-semibold mb-4'>Normal PG and HOSTEL</h1>
          <AnimatedPoints points={[
            "Call and Knock the door",
            "Time Taking",
            "Poor Conversion",
            "Poor Experience"
          ]} 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Last;