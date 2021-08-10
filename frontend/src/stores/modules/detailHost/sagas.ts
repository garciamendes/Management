// react
import { all, call, put, takeLatest } from 'redux-saga/effects'

// third party
import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'

// Services
import { api, AuthTokenHeader } from '../../../services/Api'

// local
import { HostDetailTypes } from './types'
import { fetchHostDetailListSuccess, updateStatusVulnerabilitySuccess } from './actions'

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

function* updateStatusVulnerabilitySaga({ payload }: any) {
  const { vuln_pk, asset_pk, body } = payload

  const response: AxiosResponse = yield call(
    api.patch,
    `/api/vulnerability/${vuln_pk}/asset/${asset_pk}/update`,
    {status: body},
    {
      headers: {
        'Authorization': `token ${AuthTokenHeader}`
      }
    }
  )

  if (response.status === 200) {
    yield put(updateStatusVulnerabilitySuccess({ vuln_pk, asset_pk, body: response.data }))
  } else {
    toast.error('Erro')
  }

}

export default all([
  takeLatest(HostDetailTypes.FETCH_LIST_DETAIL, fetchHostDetailSuccessSaga),
  takeLatest(HostDetailTypes.FETCH_STATUS_DETAIL, updateStatusVulnerabilitySaga),
])