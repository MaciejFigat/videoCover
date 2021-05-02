import React from 'react'
import { useSelector } from 'react-redux'
import AnimWrapperSecondary from '../animations/AnimWrapperSecondary'
import { NavLink } from 'react-router-dom'
const About = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <AnimWrapperSecondary>
      <section className={`showcase ${menuOpen}`}>
        <div className={`overlay ${menuOpen} secondary`}></div>
        <div className={`text ${menuOpen}`}>
          <h2>React + EmailJS</h2>
          <h3>Sending an email through a form with EmailJS intermediary.</h3>
          <NavLink
            exact
            to='/about/emailjs'
            className='nav_link'
            activeClassName='nav_link_active'
          >
            Tutorial
          </NavLink>
        </div>
      </section>
    </AnimWrapperSecondary>
  )
}

export default About
