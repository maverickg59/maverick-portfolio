import { React } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Resume, Projects, Calculators } from './pages'
import './index.scss'

import { Paginator, mockData, Card } from './Paginator'

function App() {
  return (
    <Router>
      <section>
        <Paginator records={mockData} rows={5} adjacents={2}>
          {({ title, value }) => (
            <Card key={title} title={title} value={value} />
          )}
        </Paginator>
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
