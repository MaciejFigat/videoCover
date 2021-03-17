import React from 'react'
import '../styles/toasts.scss'
const Toast = ({ toastMessage, menuOpen, toastVersion }) => {
  return (
    <div className={`toasts ${menuOpen}`}>
      <div className={`toast ${toastVersion} ${menuOpen} `}>
        {toastMessage} {toastVersion}
      </div>
    </div>
  )
}

export default Toast
