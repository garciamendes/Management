// Local
import { HostsTypes, HostsState, } from './types'

export const fetchHostsList = () => {
  return {
    type: HostsTypes.FETCH_HOSTS_LIST
  }
}

export const fetchHostsListSuccess = (data: HostsState) => {
  return {
    type: HostsTypes.FETCH_HOST_LIST_SUCCESS,
    payload: data,
  }
}