// Third party
import { HashRouter, Switch } from 'react-router-dom'

// Project
import home from './containers/home'
import login from './containers/Auth/login'
import hosts from './containers/hosts'
import vulnerability from './containers/vulnerability'

// Components
import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <PublicRoute path='/' exact redirect={true} component={login} />
        <PrivateRoute path='/dashboard' exact component={home} />
        <PrivateRoute path='/hosts' exact component={hosts} />
        <PrivateRoute path='/vulnerabilities/' exact component={vulnerability} />
      </Switch>
    </HashRouter>
  )
}