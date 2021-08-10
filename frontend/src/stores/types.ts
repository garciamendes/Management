// Local
import { HostsState } from './modules/assets/types'
import { HostDetailState } from './modules/detailHost/types'
import { VulnerabilitiesState } from './modules/vulnerability/types'

export interface StateDefaultType {
  pk: string | number
  status: number | string
  count: string | number
  next: number
  previous: number
  results: Array<Object>
}

export interface ReduxState {
  vulnerabilities: VulnerabilitiesState
  hosts: HostsState
  hostDetail: HostDetailState
}