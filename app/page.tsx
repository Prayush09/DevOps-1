'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaAws, FaGithub, FaCode } from 'react-icons/fa';

const LandingPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={styles.container}
    >
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      style={styles.header}
    >
      Welcome to My Awesome Landing Page!
    </motion.h1>


      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={styles.subHeader}
      >
        I have successfully deployed this using CI/CD in AWS!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={styles.iconsContainer}
      >
        <FaReact size={50} style={styles.icon} />
        <FaAws size={50} style={styles.icon} />
        <FaGithub size={50} style={styles.icon} />
        <FaCode size={50} style={styles.icon} />
      </motion.div>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={styles.footer}
      >
        Built with ❤️ using React, Framer Motion, and AWS.
      </motion.p>
    </motion.div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#121212',
    color: '#ffffff',
  },
  header: {
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  subHeader: {
    fontSize: '1.5rem',
    textAlign: 'center',
    marginBottom: '2rem',
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '50%',
    marginBottom: '2rem',
  },
  icon: {
    color: '#61dafb',
  },
  footer: {
    fontSize: '1rem',
    textAlign: 'center',
    opacity: 0.7,
  },
} as const;

export default LandingPage;