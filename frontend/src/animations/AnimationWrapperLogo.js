import React from 'react'
import { motion } from 'framer-motion'
import { pageTransitionLogo, pageVariantsLogo } from './transitions'
const AnimationWrapperLogo = ({ children }) => {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={pageVariantsLogo}
      transition={pageTransitionLogo}
    >
      {children}
    </motion.div>
  )
}

export default AnimationWrapperLogo
