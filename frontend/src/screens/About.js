import React from 'react'
import fogMountain from '../assets/fogMountain.mp4'
import { useSelector } from 'react-redux'
import '../styles/Home.scss'

const About = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <>
      <section className={`showcase ${menuOpen}`}>
        <header>
          <h2 className='logo'>About</h2>
        </header>

        <div className={`overlay ${menuOpen}`}></div>
        <div className={`text ${menuOpen}`}>
          <h2>About things</h2>
          <h3>Is it more important for something to be customer-directed?</h3>
          <p>
            Without efficient, transparent bloatware, you will lack
            affiliate-based compliance. The capacity to enable perfectly leads
            to the capacity to harness without devaluing our capability to
            implement wirelessly leads to the capacity to synthesize
            interactively.
          </p>
          <a href='#'>Best Quality</a>
        </div>
      </section>
    </>
  )
}

export default About
