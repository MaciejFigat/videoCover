import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { messageChange, messageReset } from '../actions/messageActions'
import emailjs from 'emailjs-com'
import '../styles/Form.scss'
import '../styles/button.scss'

const ContactForm = () => {
  const dispatch = useDispatch()

  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState
  const userMessageSaved = useSelector(
    (state) => state.userMessage.userMessageSent
  )
  const {
    name: userName,
    email: userEmail,
    message: userMessageContent,
  } = userMessageSaved

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const messageSaveHandler = (e) => {
    e.preventDefault()
    dispatch(messageChange({ name, email, message: formMessage }))
  }
  const messageResetHandler = (e) => {
    e.preventDefault()
    dispatch(messageReset())
  }

  // emailJS
  const EMAILJS_ID = process.env.REACT_APP_MY_EMAILJS_ID
  const SERVICE_ID = process.env.REACT_APP_MY_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_MY_TEMPLATE_ID

  const templateParams = {
    from_name: name,
    to_name: 'Maciej',
    message: formMessage,
    reply_to: email,
  }

  const emailJSSendHandler = (e) => {
    e.preventDefault()
    dispatch(messageChange({ name, email, message: formMessage }))
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, EMAILJS_ID).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
      },
      function (error) {
        console.log('FAILED...', error)
      }
    )
  }

  //

  useEffect(() => {
    if (userMessageSaved) {
      setName(userName)
      setEmail(userEmail)
      setFormMessage(userMessageContent)
    }
  }, [userMessageSaved, userEmail, userMessageContent, userName])

  return (
    <>
      {' '}
      <div className='contact_form_container'>
        <form className='contact_form'>
          <div className='contact_field'>
            <label> name: </label>
            <input
              className={`contact_field_content ${menuOpen}`}
              type='text'
              value={name}
              placeholder='your name'
              onChange={(e) => setName(e.target.value)}
            />
            <span className='span_input2' data-placeholder='NAME'></span>
          </div>
          <div className='contact_field'>
            <label>email:</label>
            <input
              className={`contact_field_content ${menuOpen}`}
              type='email'
              value={email}
              placeholder='your email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className='span_input2' data-placeholder='NAME'></span>
          </div>
          <div className='contact_field'>
            <label> message:</label>
            <textarea
              className={`contact_field_content ${menuOpen} messageField`}
              value={formMessage}
              placeholder='message me'
              onChange={(e) => setFormMessage(e.target.value)}
            ></textarea>
            <span className='span_input2' data-placeholder='NAME'></span>
          </div>{' '}
        </form>
        <div className='send_button_wrapper'>
          <button className='send_button' onClick={messageSaveHandler}>
            <i className='fas fa-save'></i>
          </button>
          <button className='send_button' onClick={messageResetHandler}>
            reset
          </button>
          <button className='send_button' onClick={emailJSSendHandler}>
            send
          </button>
        </div>
      </div>
    </>
  )
}
export default ContactForm
