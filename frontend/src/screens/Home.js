import React, { useState } from 'react'
import fogMountain from '../assets/fogMountain.mp4'
import Burger from '../components/Burger'
import Menu from '../layout/Menu'
import '../styles/Home.scss'
import { NavLink } from 'react-router-dom'

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClickMenu = () => {
    if (menuOpen === false) {
      setMenuOpen(true)
    } else {
      setMenuOpen(false)
    }
  }

  return (
    <>
      <div className={`toggle ${menuOpen}`} onClick={handleClickMenu}>
        <Burger menuOpen={menuOpen} />
      </div>
      <section className={`showcase ${menuOpen}`}>
        <header>
          <h2 className='logo'>Logo</h2>
        </header>

        <video className='video' src={fogMountain} muted loop autoPlay></video>

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
        <ul className='social'>
          <li>
            <a href='#'>
              <i className='fas fa-chevron-circle-left'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-chevron-circle-left'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-chevron-circle-left'></i>
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Home
