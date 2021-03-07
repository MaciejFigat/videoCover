import './styles/App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, About, Misc } from './screens'
import Menu from './layout/Menu'
import Burger from './components/Burger'
function App() {
  return (
    <Router>
      <Route path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/misc' component={Misc} />
      <Menu />
      <Burger />
    </Router>
  )
}

export default App
