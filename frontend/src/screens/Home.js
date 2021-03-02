import React from 'react'
import fogMountain from '../assets/fogMountain.mp4'
import '../styles/Home.css'

const Home = () => {
  return (
    <section className='showcase'>
      <header>
        <h2 className='logo'>Logo</h2>
        <div className='toggle'></div>
      </header>

      <video className='video' src={fogMountain} muted loop autoPlay></video>

      <div className='overlay'></div>
      <div className='text'>
        <h2>Live, love</h2>
        <h3>Eat</h3>
      </div>
    </section>
  )
}

export default Home
