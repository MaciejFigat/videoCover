import React from 'react'
import { useSelector } from 'react-redux'
import ContactForm from '../components/ContactForm'

import AnimWrapperSecondary from '../animations/AnimWrapperSecondary'
const About = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <>
      <AnimWrapperSecondary>
        <section className={`showcase ${menuOpen}`}>
          <header>
            <h2 className='logo'>Contact me</h2>
          </header>
          <div className={`overlay ${menuOpen} secondary`}></div>
          <div className={`text ${menuOpen}`}>
            {' '}
            <ContactForm />
          </div>
        </section>
      </AnimWrapperSecondary>
    </>
  )
}

export default About
