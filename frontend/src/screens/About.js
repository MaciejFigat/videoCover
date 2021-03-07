import React from 'react'
import fogMountain from '../assets/fogMountain.mp4'

import '../styles/Home.scss'

const About = () => {
  return (
    <>
      <section className={`showcase`}>
        <header>
          <h2 className='logo'>About</h2>
        </header>

        <div className={`overlay`}></div>
        <div className={`text`}>
          <h2>Live, love</h2>
          <h3>Eat The capability to implement.</h3>
          <p>
            Without C2C, you will lack architectures. Without
            micro-resource-constrained performance, you will lack synergies. If
            you transition globally, you may also mesh iteravely.
          </p>
          <a href='#'>Best Quality</a>
        </div>
      </section>
    </>
  )
}

export default About
