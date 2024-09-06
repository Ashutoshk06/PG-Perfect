import React from 'react';
import { motion } from 'framer-motion';
import home1 from "../HomePage/images/home1.png";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
        duration: 1.2,
        type: 'spring',
        stiffness: 100,
      },
    }),
    slide: {
      x: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
      },
    },
  };

  return (
    <div className="hero-section-container relative h-screen">
      <div className="hero absolute inset-0 z-0 ">
        <motion.div
          className="hero-image absolute inset-0 "
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.7, scale: 0.85 }}
          transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
        >
          <img src={home1} alt="Hero" className="w-full h-full object-cover  " />
        </motion.div>
      </div>
      <motion.div
        className="hero-text z-10 absolute -top-10 left-0 right-0 text-black text-center flex flex-col justify-center items-center h-full"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.h1
          className="text-6xl font-bold mt-0"
          variants={textVariants}
          custom={1}
          animate="slide"
        >
          Welcome to <span className='text-blue-600'>PG PERFECT</span>
        </motion.h1>
        <motion.p
          className='text-xl italic font-semibold'
          variants={textVariants}
          custom={2}
          animate="slide"
        >
          Manage all your work in PG at one place. Our website helps you handle complaints, keep track of tasks, and generate reports for your PG.
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Home;