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

export default Misc
