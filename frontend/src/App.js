import './styles/App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Misc from './screens/Misc'
import Menu from './layout/Menu'
function App() {
  return (
    <Router>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/misc' component={Misc} />
      <Menu />
    </Router>
  )
}

export default App
