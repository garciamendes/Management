// Types
import { StateDefaultType } from '../../types'

export enum HostDetailTypes {
  FETCH_LIST_DETAIL = 'FETCH_LIST_DETAIL',
  FETCH_LIST_DETAIL_SUCCESS = 'FETCH_LIST_DETAIL_SUCCESS',
  FETCH_STATUS_DETAIL = 'FETCH_STATUS_DETAIL',
  FETCH_STATUS_DETAIL_SUCCESS = 'FETCH_STATUS_DETAIL_SUCCESS',
}

export interface HostVulnerabilityDetailProps {
  id: number
  title: string
  severity: number
  cvss: number
  publication_date: string
  asset_count: number
}

export interface StatusProps {
  vuln_pk: string | number
  asset_pk: string | number
  body: number | string
}

export interface HostDetailProps {
  vulnerability: HostVulnerabilityDetailProps;
  status: number | string
}

export interface HostDetailProps {
  payload: HostDetailProps
}

export interface HostDetailState extends StateDefaultType {
  status: number | string
  results: Array<HostDetailProps>
}