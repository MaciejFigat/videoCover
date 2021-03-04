import React, { useState } from 'react'
import fogMountain from '../assets/fogMountain.mp4'
import Burger from '../components/Burger'
import '../styles/Home.css'

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
      <section className='showcase'>
        <header>
          <h2 className='logo'>Logo</h2>

          <div className='toggle' onClick={handleClickMenu}>
            <Burger menuOpen={menuOpen} />
          </div>
        </header>

        <video className='video' src={fogMountain} muted loop autoPlay></video>

        <div className='overlay'></div>
        <div className='text'>
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
      <div className='menu'>
        <ul>
          <li>
            <a href='#'>Imagine a combination</a>
          </li>
          <li>
            <a href='#'>Accepted buzzword</a>
          </li>
          <li>
            <a href='#'>Customer-directed</a>
          </li>
          <li>
            <a href='#'>Quality driven</a>
          </li>
          <li>
            <a href='#'>Best Quality</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home
