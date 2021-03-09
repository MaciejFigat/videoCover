import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
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
