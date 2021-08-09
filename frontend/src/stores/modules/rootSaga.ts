// third party
import { all } from 'redux-saga/effects'

// project
import auth_saga from './auth/sagas'
import assets_saga from './assets/sagas'
import vulnerabilities_saga from './vulnerability/sagas'

export default function* rootSaga(): any {
  return yield all([
    auth_saga,
    assets_saga,
    vulnerabilities_saga,
  ])
}