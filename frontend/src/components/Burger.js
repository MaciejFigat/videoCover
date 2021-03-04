import React from 'react'
import '../styles/Burger.scss'
const Burger = ({ menuOpen }) => {
  return (
    <div className='burger'>
      <div className={`line1 ${menuOpen}`}></div>
      <div className={`line2 ${menuOpen}`}></div>
      <div className={`line3 ${menuOpen}`}></div>
    </div>
  )
}
export default Burger
