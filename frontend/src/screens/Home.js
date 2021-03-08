import React from 'react'
import fogMountain from '../assets/fogMountain.mp4'
import Burger from '../components/Burger'
import Menu from '../layout/Menu'
import '../styles/Home.scss'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const pageVariants = {
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '-100vw',
  },
}
const pageTransition = {
  // type: 'tween',
  duration: 0.7,
}

const Home = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={pageVariants}
      transition={pageTransition}
    >
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
    </motion.div>
  )
}

export default Home
