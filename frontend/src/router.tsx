// Third party
import { HashRouter, Route, Switch } from 'react-router-dom'

// Project
import home from './containers/home'
import login from './containers/Auth/login'

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={login} />
        <Route path='/dashboard' component={home} />
        {/* <Route path='/admin' component={admin} /> */}
        {/* <Route path='/hosts' component={hosts} /> */}
        {/* <Route path='/vulnerabilities' component={vulnerabilities} /> */}
      </Switch>
    </HashRouter>
  )
}