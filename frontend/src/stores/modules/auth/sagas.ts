// react
import { all, call, takeLatest } from 'redux-saga/effects'

// third party
import { AxiosResponse } from 'axios'
import toast from 'react-hot-toast'

// Services
import { api } from '../../../services/Api'

// local
import { IAuthProps, UserTypes } from './types'


function* fetchAuthSuccessSaga({ payload, type, callback }: IAuthProps) {
  const response: AxiosResponse = yield call(api.post, '/api-token-auth/', payload)

  if (response.status === 200) {
    localStorage.setItem('token', response.data.token)
    callback?.()
  } else {
    toast.error('Erro ao logar, verifique as suas credenciais')
  }

}

export default all([
  takeLatest(UserTypes.FETCH_AUTH, fetchAuthSuccessSaga),
])