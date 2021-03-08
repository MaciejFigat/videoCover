import React from 'react'
import fogMountain from '../assets/fogMountain.mp4'
import { useSelector } from 'react-redux'
import '../styles/Home.scss'
import { motion } from 'framer-motion'
import {
  pageTransitionLogo,
  pageTransition,
  pageVariantsLogo,
  pageVariants,
} from '../animations/transitions'

const Misc = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <>
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={pageVariantsLogo}
        transition={pageTransitionLogo}
      >
        <h2 className={`logoOnMenu ${menuOpen}`}>Misc</h2>
      </motion.div>

      <motion.div
        initial='out'
        animate='in'
        exit='in'
        variants={pageVariants}
        transition={pageTransition}
      >
        <section className={`showcase ${menuOpen}`}>
          <header>
            <h2 className='logo'>Misc</h2>
          </header>

          <div className={`overlay ${menuOpen}`}></div>
          <div className={`text ${menuOpen}`}>
            <h2>Research</h2>
            <h3>Our end-to-end feature set is second to none. </h3>
            <p>
              Without macro-vertical CAE, you will lack research and
              development.
            </p>
            <a href='#'>Best Quality</a>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default Misc
