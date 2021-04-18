import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/Home.scss'
import AnimationWrapperLogo from '../animations/AnimationWrapperLogo'
import AnimationWrapper from '../animations/AnimationWrapper'
import {
  emailJSFunctionExample,
  stateExample,
  inputExample,
  envExample,
  templateParamsExample,
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
      <AnimationWrapper>
        <section className={`showcase ${menuOpen}`}>
          <div className={`overlay ${menuOpen}`}></div>
          <div className={`text ${menuOpen}`}>
            <h2>About things</h2>
            <h3>Is it more important for something.</h3>
            <p>
              Without efficient, transparent bloatware, you will lack
              affiliate-based compliance.
            </p>
            <CodeHighlight codeBlock={stateExample} />
            <CodeHighlight codeBlock={inputExample} />
            <CodeHighlight codeBlock={envExample} />
            <CodeHighlight codeBlock={templateParamsExample} />
            <CodeHighlight codeBlock={emailJSFunctionExample} />
          </div>
        </section>
      </AnimationWrapper>
    </>
  )
}

export default About
