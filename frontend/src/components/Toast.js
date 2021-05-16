import React from 'react'
import '../styles/toasts.scss'
const Toast = ({ toastMessage, toastVersion }) => {
  return (
    <div className={`toasts`}>
      <div className={`toast ${toastVersion}`}>
        <b>{toastMessage}</b>
      </div>
    </div>
  )
}

export default Toast
