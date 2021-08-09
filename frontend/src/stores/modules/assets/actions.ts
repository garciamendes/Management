// Local
import { HostsTypes, HostsState } from './types'

export const fetchHostsList = () => {
  return {
    type: HostsTypes.FETCH_LIST
  }
}

export const fetchHostsListSuccess = (data: HostsState) => {
  return {
    type: HostsTypes.FETCH_LIST_SUCCESS,
    payload: data,
  }
}