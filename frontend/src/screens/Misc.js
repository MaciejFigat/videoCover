import React from 'react'
import { useSelector } from 'react-redux'
import AnimWrapperSecondary from '../animations/AnimWrapperSecondary'
const Misc = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <>
      <AnimWrapperSecondary>
        <section className={`showcase ${menuOpen}`}>
          <header>
            <h2 className='logo'>Misc</h2>
          </header>

          <div className={`overlay ${menuOpen}`}></div>
          <div className={`text ${menuOpen}`}>
            <h2>Research</h2>
            <h3>Our end-to-end feature set is second to none. </h3>
            <p>
              Without macro-vertical CAE, you will lack research and
              development.
            </p>
          </div>
        </section>
      </AnimWrapperSecondary>
    </>
  )
}

export default Misc
