import { React } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Resume, Projects, Calculators } from './pages'
import { Header, Footer } from './components'
import './index.scss'

function App() {
  return (
    <Router>
      <Header />
      <section className='c-portfolio__content o-row o-justify--center o-align--center'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/calculators' component={Calculators} />
        </Switch>
      </section>
      <Footer />
    </Router>
  )
}

export default App
