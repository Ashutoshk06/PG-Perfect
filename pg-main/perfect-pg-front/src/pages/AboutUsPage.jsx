import React from 'react';
import { motion } from 'framer-motion';


const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeInOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
  };

  return (
    <div className='about-page w-full'>
      <motion.div
        className="about-hero relative h-96 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        
        <motion.div
          className="hero-text absolute inset-0 flex flex-col justify-center items-center text-white bg-slate-300"
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
            className="text-6xl font-bold"
            variants={textVariants}
            custom={1}
          >
            About <span className='text-blue-600'>PG Perfect</span>
          </motion.h1>
          <motion.p
            className='text-xl italic font-semibold mt-4'
            variants={textVariants}
            custom={2}
          >
            Your Ultimate PG Management Solution
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="about-content container mx-auto px-10 py-16">
        <motion.div
          className="content-section mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h2 className='text-4xl font-bold mb-4'>Who We Are</h2>
          <p className='text-lg'>
            PG Perfect is dedicated to revolutionizing the way PGs are managed. Our comprehensive platform helps streamline operations, improve tenant satisfaction, and optimize management efficiency. With features like income and expense tracking, complaint management, and detailed reporting, we empower PG owners and managers to take control of their business.
          </p>
        </motion.div>

        <motion.div
          className="content-section mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h2 className='text-4xl font-bold mb-4'>Our Mission</h2>
          <p className='text-lg'>
            Our mission is to provide a user-friendly and effective solution for PG management. We aim to simplify the daily tasks of PG owners and managers, allowing them to focus on providing the best living experience for their tenants.
          </p>
        </motion.div>

        <motion.div
          className="content-section mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h2 className='text-4xl font-bold mb-4'>Why Choose Us</h2>
          <ul className='list-disc list-inside space-y-2'>
            <li>Streamlined Operations: Manage all aspects of your PG with ease.</li>
            <li>Real-Time Insights: Get detailed reports and insights to make informed decisions.</li>
            <li>Tenant Satisfaction: Efficiently handle complaints and enhance tenant experience.</li>
            <li>Cost Control: Track income and expenses to optimize your budget.</li>
          </ul>
        </motion.div>

        <motion.div
          className="content-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h2 className='text-4xl font-bold mb-4'>Get in Touch</h2>
          <p className='text-lg'>
            Have questions or need support? Contact us at <a href="mailto:support@pgperfect.com" className='text-blue-600'>support@pgperfect.com</a> or call us at +1 234 567 890.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;