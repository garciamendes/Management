// third party
import { combineReducers } from 'redux'

// project
import auth from './auth/reducers'
import hosts from './assets/reducers'
import hostDetail from './detailHost/reducers'
import vulnerabilities from './vulnerability/reducers'

export default combineReducers({
  auth,
  hosts,
  hostDetail,
  vulnerabilities
})