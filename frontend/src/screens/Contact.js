import React from 'react'
import { useSelector } from 'react-redux'
import ContactForm from '../components/ContactForm'
import MainWrapper from '../components/MainWrapper'

const About = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <MainWrapper>
      <div className={`overlay ${menuOpen}`}></div>
      <header>
        <h2 className='logo'>Send me an email</h2>
      </header>

      <div className={`text ${menuOpen}`}>
        {' '}
        <ContactForm />
      </div>
    </MainWrapper>
  )
}

export default About
