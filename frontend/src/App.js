import './styles/App.scss'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Home, About, Misc, Contact } from './screens'
import { AnimatePresence } from 'framer-motion'
import Menu from './layout/Menu'
import Burger from './components/Burger'
import EmailJS from './tutorials/EmailJS'
function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path='/about' component={About} />
          <Route exact path='/about/emailjs' component={EmailJS} />
          <Route exact path='/misc' component={Misc} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/' component={Home} />
        </Switch>
      </AnimatePresence>
      <Menu />
      <Burger />
    </>
  )
}

export default App
