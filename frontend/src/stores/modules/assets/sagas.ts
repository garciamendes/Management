// react
import { all, call, put, takeLatest } from 'redux-saga/effects'

// third party
import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'

// Services
import { api, AuthTokenHeader } from '../../../services/Api'

// local
import { HostsTypes } from './types'
import { fetchHostsListSuccess } from './actions'


function* fetchHostsSuccessSaga() {
  const response: AxiosResponse = yield call(api.get, '/api/assets/', {
    headers: {
      'Authorization': `token ${AuthTokenHeader}`
    }
  })

  if (response.status === 200) {  
    yield put(fetchHostsListSuccess(response.data))
  } else {
    toast.error('Erro')
  }

}

export default all([
  takeLatest(HostsTypes.FETCH_HOSTS_LIST, fetchHostsSuccessSaga),
])