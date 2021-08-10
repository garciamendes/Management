// react
import { all, call, put, takeLatest } from 'redux-saga/effects'

// third party
import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'

// Services
import { api, AuthTokenHeader } from '../../../services/Api'

// local
import { HostDetailTypes } from './types'
import { fetchHostDetailListSuccess } from './actions'

function* fetchHostDetailSuccessSaga({ payload, type }: any) {
  const response: AxiosResponse = yield call(api.get, `/api/assets/${payload}/`, {
    headers: {
      'Authorization': `token ${AuthTokenHeader}`
    }
  })

  if (response.status === 200) {
    yield put(fetchHostDetailListSuccess(response.data))
  } else {
    toast.error('Erro')
  }

}

export default all([
  takeLatest(HostDetailTypes.FETCH_LIST_DETAIL, fetchHostDetailSuccessSaga),
])