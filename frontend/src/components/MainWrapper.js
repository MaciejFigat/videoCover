import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnimWrapperSecondary from '../animations/AnimWrapperSecondary'

import { closeMenu } from '../actions/menuActions'

const MainWrapper = ({ children }) => {
  const dispatch = useDispatch()
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  const menuCloseHandler = () => {
    if (menuOpen === true) {
      dispatch(closeMenu())
    }
  }

  return (
    <AnimWrapperSecondary>
      {' '}
      <section className={`showcase ${menuOpen}`} onClick={menuCloseHandler}>
        {children}
      </section>
    </AnimWrapperSecondary>
  )
}

export default MainWrapper
