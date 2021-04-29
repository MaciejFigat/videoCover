import React from 'react'
import fogMountain from '../assets/fogMountain.mp4'
import '../styles/Home.scss'
import { useSelector, useDispatch } from 'react-redux'
import AnimWrapperSecondary from '../animations/AnimWrapperSecondary'
import { turnVideoOn, turnVideoOff } from '../actions/videoActions'

const Home = () => {
  const dispatch = useDispatch()
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState
  const videoState = useSelector((state) => state.videoState)
  const { videoOn } = videoState

  const videoHandler = () => {
    if (videoOn === true) {
      dispatch(turnVideoOff())
    } else {
      dispatch(turnVideoOn())
    }
  }

  return (
    <>
      <AnimWrapperSecondary>
        <section className={`showcase ${menuOpen}`}>
          <header>
            <h2 className='logo'>Maciej Figat</h2>
          </header>
          {videoOn === true ? (
            <>
              <video
                className='video'
                src={fogMountain}
                muted
                loop
                autoPlay
              ></video>
              <div className={`overlay ${menuOpen} `}></div>
            </>
          ) : (
            <div className={`overlayNoVid ${menuOpen} `}></div>
          )}

          <div className={`text ${menuOpen}`}>
            <h2>Welcome </h2>
            <h3>
              {videoOn === true ? (
                <button className='button-play' onClick={videoHandler}>
                  <i className='far fa-pause-circle'></i> cover
                </button>
              ) : (
                <button className='button-play' onClick={videoHandler}>
                  <i className='far fa-play-circle'></i> cover
                </button>
              )}
            </h3>
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
              <a href='https://github.com/MaciejFigat' aria-label='Github'>
                <i className='fab fa-github-square'></i>
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/maciej-figat/'
                aria-label='Linkedin'
              >
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a href='/contact' aria-label='contact'>
                <i className='fas fa-envelope-square'></i>
              </a>
            </li>
            <li>
              <a
                href='https://maciejfigat.github.io/digitalCV/'
                aria-label='Digital Resume'
              >
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
