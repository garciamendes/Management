// Types
import { HostDetailState, HostDetailTypes } from './types'

export const fetchHostDetailList = ({ pk }: any) => {
  return {
    type: HostDetailTypes.FETCH_LIST_DETAIL,
    payload: pk
  }
}

export const fetchHostDetailListSuccess = (data: HostDetailState) => {
  return {
    type: HostDetailTypes.FETCH_LIST_DETAIL_SUCCESS,
    payload: data,
  }
}