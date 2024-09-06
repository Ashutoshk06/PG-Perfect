import React from 'react';
import { motion } from 'framer-motion';

const Purpose = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <div className='w-full'>
      <h1 className='text-center text-5xl my-10 font-bold'>
        <span className='text-blue-600'>Purpose</span> of the PG Perfect
      </h1>
      <div className='cards flex justify-between w-full px-10'>
        <motion.div
          className="purpose flex justify-center items-center w-1/3 h-48 bg-blue-600 m-4 rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h1 className='text-white text-center text-4xl font-semibold p-2'>Software Based Solution</h1>
        </motion.div>
        <motion.div
          className="purpose flex justify-center items-center w-1/3 h-48 bg-blue-500 m-4 rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h1 className='text-white text-center text-4xl font-semibold p-2'>Complete Monitoring</h1>
        </motion.div>
        <motion.div
          className="purpose flex justify-center items-center w-1/3 h-48 bg-blue-300 m-4 rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h1 className='text-white text-center text-4xl font-semibold p-2'>User-friendly Interface</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Purpose;