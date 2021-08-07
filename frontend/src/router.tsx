// Third party
import { HashRouter, Route, Switch } from 'react-router-dom'

// Project
import home from './containers/home'
import login from './containers/Auth/login'
import hosts from './containers/hosts'
import vulnerability from './containers/vulnerability'

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={login} />
        <Route path='/dashboard' component={home} />
        <Route path='/hosts' component={hosts} />
        <Route path='/host/:id' component={vulnerability} />
      </Switch>
    </HashRouter>
  )
}