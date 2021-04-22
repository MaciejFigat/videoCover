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
            <h2 className='logo'>Maciej Figat</h2>
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
            <h2>Welcome</h2>
            <h3>Here you can find me and my recent works.</h3>
            <p>
              I intend to share some cool, yet easy to implement, tricks and
              methods I used recently in React development.
            </p>
            <p>
              Below lie some links to my social accounts as well as my digital
              resume. Visit me there if you like.
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
            <li>
              <a href='https://maciejfigat.github.io/digitalCV/'>
                <i className='fas fa-user-graduate'></i>
              </a>
            </li>
          </ul>
        </section>
      </AnimWrapperSecondary>
    </>
  )
}

export default Home
