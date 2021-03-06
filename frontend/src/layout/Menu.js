// import React, { useState } from 'react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { closeMenu } from '../actions/menuActions'
const Menu = () => {
  const dispatch = useDispatch()

  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  // const [menuOpen, setMenuOpen] = useState(false)

  const handleClickMenu = () => {
    if (menuOpen === true) {
      dispatch(closeMenu())
    }
  }
  // const handleClickMenu = () => {
  //   setMenuOpen(!menuOpen)
  // }
  return (
    <>
      <div className={`menu ${menuOpen}`}>
        <ul>
          <li>
            <NavLink
              exact
              to='/home'
              className='nav_link'
              activeClassName='nav_link_active'
              onClick={handleClickMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/about'
              className='nav_link'
              activeClassName='nav_link_active'
              onClick={handleClickMenu}
            >
              React Tricks
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/projects'
              className='nav_link'
              activeClassName='nav_link_active'
              onClick={handleClickMenu}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/contact'
              className='nav_link'
              activeClassName='nav_link_active'
              onClick={handleClickMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Menu
