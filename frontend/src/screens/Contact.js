import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/Home.scss'
import ContactForm from '../components/ContactForm'
import AnimationWrapperLogo from '../animations/AnimationWrapperLogo'
import AnimationWrapper from '../animations/AnimationWrapper'

const About = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <>
      <AnimationWrapperLogo>
        <h2 className={`logoOnMenu ${menuOpen}`}>Contact</h2>
      </AnimationWrapperLogo>
      <AnimationWrapper>
        <section className={`showcase ${menuOpen}`}>
          <header>
            <h2 className='logo'>Contact me</h2>
          </header>
          <div className={`overlay ${menuOpen}`}></div>
          <div className={`text ${menuOpen}`}>
            {' '}
            <ContactForm />
          </div>
        </section>
      </AnimationWrapper>
    </>
  )
}

export default About
