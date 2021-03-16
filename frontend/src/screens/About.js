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
import {
  emailJSFunctionExample,
  stateExample,
  inputExample,
  envExample,
  templateParamsExample,
} from '../components/codeExamples'
import CodeHighlight from '../components/CodeHighlight'

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
        <h2 className={`logoOnMenu ${menuOpen}`}>Tricks</h2>
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
            <h2 className='logo'>Tricks</h2>
          </header>
          <div className={`overlay ${menuOpen}`}></div>
          <div className={`text ${menuOpen}`}>
            <h2>About things</h2>
            <h3>Is it more important for something.</h3>
            <p>
              Without efficient, transparent bloatware, you will lack
              affiliate-based compliance.
            </p>
            <CodeHighlight codeBlock={stateExample} />
            <CodeHighlight codeBlock={inputExample} />
            <CodeHighlight codeBlock={envExample} />
            <CodeHighlight codeBlock={templateParamsExample} />
            <CodeHighlight codeBlock={emailJSFunctionExample} />
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default About
