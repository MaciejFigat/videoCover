import React from 'react'
import fogMountain from '../assets/fogMountain.mp4'
import '../styles/Home.scss'
import { useSelector } from 'react-redux'
import AnimWrapperSecondary from '../animations/AnimWrapperSecondary'

const Home = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <>
      <AnimWrapperSecondary>
        <section className={`showcase ${menuOpen}`}>
          <header>
            <h2 className='logo'>Logo</h2>
          </header>

          <video
            className='video'
            src={fogMountain}
            muted
            loop
            autoPlay
          ></video>

          <div className={`overlay ${menuOpen}`}></div>
          <div className={`text ${menuOpen}`}>
            <h2>Live, love</h2>
            <h3>Eat The capability to implement.</h3>
            <p>
              Without C2C, you will lack architectures. Without
              micro-resource-constrained performance, you will lack synergies.
              If you transition globally, you may also mesh iteravely.
            </p>
          </div>
          <ul className='social'>
            <li>
              <a href='https://github.com/MaciejFigat'>
                <i className='fab fa-github-square'></i>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/maciej-figat/'>
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a href='/contact'>
                <i className='fas fa-envelope-square'></i>
              </a>
            </li>
          </ul>
        </section>
      </AnimWrapperSecondary>
    </>
  )
}

export default Home
