// Types
import { HostDetailState, HostDetailTypes, StatusProps } from './types'

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

export const updateStatusVulnerability = ({ vuln_pk, asset_pk, body }: StatusProps) => {
  return {
    type: HostDetailTypes.FETCH_STATUS_DETAIL,
    payload: { vuln_pk, asset_pk, body }
  }
}

export const updateStatusVulnerabilitySuccess = (payload: StatusProps) => {
  return {
    type: HostDetailTypes.FETCH_STATUS_DETAIL_SUCCESS,
    payload
  }
}