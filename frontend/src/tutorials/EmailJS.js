import React from 'react'
import {
  emailJSFunctionExample,
  stateExample,
  inputExample,
  envExample,
  templateParamsExample,
  envVariablesAccess,
} from '../components/codeExamples'
import CodeHighlight from '../components/CodeHighlight'
import { useSelector } from 'react-redux'
import AnimWrapperSecondary from '../animations/AnimWrapperSecondary'
import { NavLink } from 'react-router-dom'

const EmailJS = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState
  return (
    <AnimWrapperSecondary>
      <section className={`showcase ${menuOpen}`}>
        <div className={`overlay ${menuOpen} secondary`}></div>
        <div className={`text ${menuOpen}`}>
          <NavLink
            exact
            to='/about/'
            className='nav_link'
            activeClassName='nav_link_active'
          >
            Go back
          </NavLink>
          <h2>React + EmailJS</h2>
          <h3>Sending an email through a form with EmailJS intermediary.</h3>
          <p>
            <b>
              Warning: Viablility of this solution is dependant on your version
              of your react-scripts and actually using React - since we are
              basing the whole tutorial on the fact that React uses .env under
              the hood.{' '}
            </b>
          </p>
          <p>1. Create a form component. </p>
          <p>
            2. Set up useState hooks for your inputs in the form, just like so:
          </p>
          <span>
            <CodeHighlight codeBlock={stateExample} />
          </span>{' '}
          <p>
            3. Include function updating the relevant state in onChange event in
            inputs of your form. Example, for name:
          </p>
          <span>
            {' '}
            <CodeHighlight codeBlock={inputExample} />
          </span>
          <p>
            4. Install EmailJS and import it to your form. <br /> npm i
            emailjs-com <br /> import emailjs from 'emailjs-com'
          </p>
          <p>
            5. Set up a file called .env in the root of the project. I use them
            to hide the variables from my EmailJS account. While at it, check if
            we have .env included in .gitignore file. If not - we should add it,
            to not expose the variables in our remote repository.{' '}
          </p>
          <p>
            6. Set up an account at EmailJS - https://www.emailjs.com/. Set your
            service and template up and find User ID, Service ID, Template ID.
            User ID is in the integration page in the EmailJS dashboard.
          </p>
          <p>
            7. Define those ID's as environment variables in .env file. Custom
            environment variables must be named in this convention ie. starting
            with REACT_APP_.
          </p>
          <span>
            <CodeHighlight codeBlock={envExample} />
          </span>
          <p>
            8. Environment variables, we just set up, will be defined on
            process.env. For example: process.env.REACT_APP_MY_EMAILJS_ID will
            expose REACT_APP_MY_EMAILJS_ID environmental variable.
          </p>
          <p>9. In the Form component we need to set up 3 things: </p>
          <p>
            way of accessing environmental variables that will be used in the
            emailJS function:
          </p>
          <span>
            <CodeHighlight codeBlock={envVariablesAccess} />
          </span>
          <p>template for our email, for example:</p>
          <span>
            <CodeHighlight codeBlock={templateParamsExample} />
          </span>
          <p>function to send the email</p>
          <span>
            <CodeHighlight codeBlock={emailJSFunctionExample} />
          </span>
          <p>
            10. When code above will be executed, in my case through onClick
            event in a form button. There should be a message in the console
            informing about the result. If it works then remove console.logs
            from your function so it won't clutter the console.{' '}
          </p>
          <p>
            11. Reminder - Changing any environment variables will require you
            to restart the development server if it is running.
          </p>
          <p>
            <a href='https://create-react-app.dev/docs/adding-custom-environment-variables/'>
              More info on environmental variables in React.
            </a>
          </p>
          <p>
            {' '}
            <a href='https://www.npmjs.com/package/emailjs-com'>
              Documentation on emailjs-com.
            </a>
          </p>
          <NavLink
            exact
            to='/about/'
            className='nav_link'
            activeClassName='nav_link_active'
          >
            Go back to all tricks
          </NavLink>
        </div>
      </section>
    </AnimWrapperSecondary>
  )
}

export default EmailJS
