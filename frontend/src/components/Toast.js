import React from 'react'
import '../styles/toasts.scss'
const Toast = ({ toastMessage, menuOpen, toastVersion }) => {
  return (
    <div className={`toasts ${menuOpen}`}>
      <div className={`toast ${toastVersion} ${menuOpen} `}>
        <b>{toastMessage}</b>
      </div>
    </div>
  )
}

export default Toast
