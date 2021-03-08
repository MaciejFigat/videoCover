import React from 'react'
import fogMountain from '../assets/fogMountain.mp4'
import { useSelector } from 'react-redux'
import '../styles/Home.scss'
import { motion } from 'framer-motion'

const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '-100vw',
  },
}
const pageTransition = {
  type: 'tween',
  duration: 1,
}

const Misc = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='in'
      variants={pageVariants}
      transition={pageTransition}
    >
      <h2 className={`logoOnMenu ${menuOpen}`}>Misc</h2>
      <section className={`showcase ${menuOpen}`}>
        <header>
          <h2 className='logo'>Misc</h2>
        </header>

        <div className={`overlay ${menuOpen}`}></div>
        <div className={`text ${menuOpen}`}>
          <h2>Research</h2>
          <h3>Our end-to-end feature set is second to none. </h3>
          <p>
            Without macro-vertical CAE, you will lack research and development.
          </p>
          <a href='#'>Best Quality</a>
        </div>
      </section>
    </motion.div>
  )
}

export default Misc
