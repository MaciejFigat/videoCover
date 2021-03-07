import React from 'react'
import fogMountain from '../assets/fogMountain.mp4'
import { useSelector } from 'react-redux'
import '../styles/Home.scss'

const Misc = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <>
      <section className={`showcase ${menuOpen}`}>
        <header>
          <h2 className='logo'>Misc</h2>
        </header>

        <div className={`overlay ${menuOpen}`}></div>
        <div className={`text ${menuOpen}`}>
          <h2>Misc Destination</h2>
          <h3>
            Our end-to-end feature set is second to none, but our non-complex
            administration and newbie-proof use.{' '}
          </h3>
          <p>
            Without macro-vertical CAE, you will lack research and development.
            Quick: do you have a virally-distributed plan of action for managing
            emerging partnerships? Without data hygiene supervising, you will
            lack versioning.
          </p>
          <a href='#'>Best Quality</a>
        </div>
      </section>
    </>
  )
}

export default Misc
