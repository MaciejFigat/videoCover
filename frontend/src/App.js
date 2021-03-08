import './styles/App.css'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Home, About, Misc } from './screens'
import { AnimatePresence } from 'framer-motion'
import Menu from './layout/Menu'
import Burger from './components/Burger'
function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/about' component={About} />
          <Route exact path='/misc' component={Misc} />
          <Route path='/' component={Home} />
        </Switch>
      </AnimatePresence>
      <Menu />
      <Burger />
    </>
  )
}

export default App
