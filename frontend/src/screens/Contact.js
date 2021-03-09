import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/Home.scss'
import { motion } from 'framer-motion'
import {
  pageTransitionLogo,
  pageTransition,
  pageVariantsLogo,
  pageVariants,
} from '../animations/transitions'
import ContactForm from '../components/ContactForm'

const About = () => {
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
        <h2 className={`logoOnMenu ${menuOpen}`}>Contact</h2>
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
            <h2 className='logo'>Contact me</h2>
          </header>
          <div className={`overlay ${menuOpen}`}></div>
          <div className={`text ${menuOpen}`}>
            <ContactForm />
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default About
