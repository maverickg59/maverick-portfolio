import { React } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Resume, Projects, Calculators } from './pages'
import './index.scss'

function App() {
  return (
    <Router>
      <section>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/calculators' component={Calculators} />
        </Switch>
      </section>
    </Router>
  )
}

export default App
