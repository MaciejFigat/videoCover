import React from 'react'
import { useSelector } from 'react-redux'
import AnimationWrapperLogo from '../animations/AnimationWrapperLogo'

import AnimWrapperSecondary from '../animations/AnimWrapperSecondary'
import {
  emailJSFunctionExample,
  stateExample,
  inputExample,
  envExample,
  templateParamsExample,
  envVariablesAccess,
} from '../components/codeExamples'
import CodeHighlight from '../components/CodeHighlight'

const About = () => {
  const menuState = useSelector((state) => state.menuState)
  const { menuOpen } = menuState

  return (
    <>
      <AnimationWrapperLogo>
        <h2 className={`logoOnMenu ${menuOpen}`}>Tricks</h2>
      </AnimationWrapperLogo>
      <AnimWrapperSecondary>
        <section className={`showcase ${menuOpen}`}>
          <div className={`overlay ${menuOpen}`}></div>
          <div className={`text ${menuOpen}`}>
            <h2>React EmailJS</h2>
            <h3>
              Sending an email with EmailJS intermediary - simple approach.
            </h3>
            <b>
              <p>
                Warning: Viablility of this solution is dependant on your
                version of your react-scripts and actually using React - since
                we are basing the whole tutorial on the fact that React uses
                .env under the hood.{' '}
              </p>
            </b>
            <p>1. Create a form component. </p>
            <p>
              2. Set up useState hooks for your inputs in the form, just like
              so:
            </p>
            <CodeHighlight codeBlock={stateExample} />{' '}
            <p>
              3. Include function updating the relevant state in onChange event
              in inputs of your form. Example, for name:
            </p>
            <CodeHighlight codeBlock={inputExample} />
            <p>
              4. Install EmailJS and import it to your form. <br /> npm i
              emailjs-com <br /> import emailjs from 'emailjs-com'
            </p>
            <p>
              5. Set up a file called .env in the root of the project. I use
              them to hide the variables from my EmailJS account. While at it,
              check if we have .env included in .gitignore file. If not - we
              should add it, to not expose the variables in our remote
              repository.{' '}
            </p>
            <p>
              6. Set up an account at EmailJS - https://www.emailjs.com/. Set
              your service and template up and find User ID, Service ID,
              Template ID. User ID is in the integration page in the EmailJS
              dashboard.
            </p>
            <p>
              7. Define those ID's as environment variables in .env file. Custom
              environment variables must be named in this convention ie.
              starting with REACT_APP_.
            </p>
            <CodeHighlight codeBlock={envExample} />
            <p>
              8. Environment variables, we just set up, will be defined on
              process.env. For example: process.env.REACT_APP_MY_EMAILJS_ID will
              expose REACT_APP_MY_EMAILJS_ID environmental variable.
            </p>
            <p>
              9. In the Form component we need to set up 3 things:{' '}
              <p>
                way of accessing environmental variables that will be used in
                the emailJS function:
              </p>
              <CodeHighlight codeBlock={envVariablesAccess} />
            </p>
            <p>template for our email, for example:</p>
            <CodeHighlight codeBlock={templateParamsExample} />
            <p>function to send the email</p>
            <CodeHighlight codeBlock={emailJSFunctionExample} />
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
                More info - environmental variables in React.
              </a>
            </p>
            <p>
              {' '}
              <a href='https://www.npmjs.com/package/emailjs-com'>
                Documentation on emailjs-com.
              </a>
            </p>
          </div>
        </section>
      </AnimWrapperSecondary>
    </>
  )
}

export default About
