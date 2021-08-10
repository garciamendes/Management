// Types
import { StateDefaultType } from '../../types'

export enum HostDetailTypes {
  FETCH_LIST_DETAIL = 'FETCH_LIST_DETAIL',
  FETCH_LIST_DETAIL_SUCCESS = 'FETCH_LIST_DETAIL_SUCCESS',
}

export interface HostDetailProps {
  vulnerability: any;
  status: number | string
  id: number
  title: string
  severity: number
  cvss: number
  publication_date: string
  asset_count: number
}

export interface HostDetailProps {
  payload: HostDetailProps
}

export interface HostDetailState extends StateDefaultType {
  status: number | string
  results: Array<HostDetailProps>
}