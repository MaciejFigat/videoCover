import React from 'react'
import '../styles/Burger.scss'
import { useDispatch, useSelector } from 'react-redux'
import { openMenu, closeMenu } from '../actions/menuActions'
const Burger = () => {
  const dispatch = useDispatch()

  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  const handleClickMenu = () => {
    if (menuOpen === true) {
      dispatch(closeMenu())
    } else if (menuOpen === false) {
      dispatch(openMenu())
    }
  }

  return (
    <div className={`toggle ${menuOpen}`} onClick={handleClickMenu}>
      <div className='burger'>
        <div className={`line1 ${menuOpen}`}></div>
        <div className={`line2 ${menuOpen}`}></div>
        <div className={`line3 ${menuOpen}`}></div>
      </div>
    </div>
  )
}
export default Burger
