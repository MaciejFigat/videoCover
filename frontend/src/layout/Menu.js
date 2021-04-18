import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../actions/menuActions'
const Menu = () => {
  const dispatch = useDispatch()

  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  const handleClickMenu = () => {
    if (menuOpen === true) {
      dispatch(closeMenu())
    }
  }
  return (
    <>
      <div className='menu'>
        <ul>
          <li>
            <NavLink
              exact
              to='/home'
              className='nav_link'
              activeClassName='nav_link_active'
              onClick={handleClickMenu}
            >
              Accepted buzzword
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
              Customer-directed
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/misc'
              className='nav_link'
              activeClassName='nav_link_active'
              onClick={handleClickMenu}
            >
              Quality driven
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
