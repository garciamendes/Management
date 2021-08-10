// Third party
import { HashRouter, Switch } from 'react-router-dom'

// Project
import dashboard from './containers/dashboard'
import login from './containers/Auth/login'
import hosts from './containers/hosts'
import detailHost from './containers/detailHost'
import vulnerability from './containers/vulnerability'

// Components
import PublicRoute from './components/PublicRoute'
import PrivateRoute from './components/PrivateRoute'

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <PublicRoute path='/' exact redirect={true} component={login} />
        <PrivateRoute path='/dashboard' exact component={dashboard} />
        <PrivateRoute path='/hosts' exact component={hosts} />
        <PrivateRoute path='/host/:pk/:title' exact component={detailHost} />
        <PrivateRoute path='/vulnerabilities/' exact component={vulnerability} />
      </Switch>
    </HashRouter>
  )
}