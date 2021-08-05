// Third party
import { HashRouter, Route, Switch } from 'react-router-dom'

// Project
import home from './containers/home'
import login from './containers/Auth/login'
import sign from './containers/Auth/sign'

export default function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={login} />
        <Route path='/sign' component={sign} />
        <Route path='/home' component={home} />
        {/* <Route path='/detail/hosts' component={hostsDetails} /> */}
        {/* <Route path='/list/hosts' component={hosts} /> */}
        {/* <Route path='/list/vulnerabilities' component={vulnerabilities} /> */}
      </Switch>
    </HashRouter>
  )
}