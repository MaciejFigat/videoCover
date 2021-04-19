import React from 'react'
import { motion } from 'framer-motion'
import { smoothVariants, transition } from './transitions'
const AnimationWrapperLogo = ({ children }) => {
  return (
    <motion.div
      initial='exit'
      animate='enter'
      exit='exit'
      variants={smoothVariants}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}

export default AnimationWrapperLogo
