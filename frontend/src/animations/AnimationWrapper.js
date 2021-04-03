import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from './transitions'
const AnimationWrapper = ({ children }) => {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='in'
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

export default AnimationWrapper
