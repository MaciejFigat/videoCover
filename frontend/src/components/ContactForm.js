import React, { useState, useEffect } from 'react'

// import { ResponsiveDiv, ContainerDiv } from '../styles/responsiveContainer'
// import { StyledImage } from '../styles/imageStyles'

import { useDispatch, useSelector } from 'react-redux'
import { messageChange, messageReset } from '../actions/messageActions'
import emailjs from 'emailjs-com'
import dotenv from 'dotenv'
const ContactForm = () => {
  const dispatch = useDispatch()

  const userMessage = useSelector((state) => state.userMessage.userMessageSent)
  const {
    name: userName,
    email: userEmail,
    message: userMessageContent,
  } = userMessage

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setUserMessage] = useState('')

  const messageSendHandler = (e) => {
    e.preventDefault()
    dispatch(messageChange({ name, email, message }))
  }
  const messageResetHandler = (e) => {
    e.preventDefault()
    dispatch(messageReset())
  }

  // emailJS
  const EMAILJS_ID = process.env.REACT_APP_MY_EMAILJS_ID
  const SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID

  const templateParams = {
    from_name: 'John Doe',
    to_name: 'Potter Hare',
    message_html: '<p>Welcome to EmailJS!</p>',
  }

  const emailJSSendHandler = (e) => {
    e.preventDefault()
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, EMAILJS_ID).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
  }
  const dotenvConfig = (e) => {
    e.preventDefault()
  }
  //

  useEffect(() => {
    if (userMessage) {
      setName(userName)
      setEmail(userEmail)
      setUserMessage(userMessageContent)
    }
  }, [userMessage, userEmail, userMessageContent, userName])

  return (
    <>
      {' '}
      <div className='contact_form_container'>
        <form className='contact_form'>
          <div className='contact_field'>
            <label> Imię lub nazwa firmy:</label>
            <input
              className='contact_field_content'
              type='text'
              value={name}
              placeholder='Wpisz swoje imię/nazwę podmiotu'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='contact_field'>
            <label> Email:</label>
            <input
              className='contact_field_content'
              type='email'
              value={email}
              placeholder='Wpisz email kontaktowy'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='contact_field'>
            <label> Wiadomość:</label>
            <textarea
              className='contact_field_content messageField'
              value={message}
              placeholder='Wpisz wiadomość'
              onChange={(e) => setUserMessage(e.target.value)}
            ></textarea>
          </div>
          <button className='contact_button' onClick={messageSendHandler}>
            Wyślij wiadomość
          </button>
          <button className='contact_button' onClick={messageResetHandler}>
            Zresetuj wiadomość
          </button>
          emailJSSendHandler
          <button className='contact_button' onClick={emailJSSendHandler}>
            Send an email
          </button>
          <button className='contact_button' onClick={dotenvConfig}>
            DotENV
          </button>
        </form>
      </div>
    </>
  )
}
export default ContactForm
