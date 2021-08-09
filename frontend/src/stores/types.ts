// Local
import { HostsState } from "./modules/assets/types"
import { VulnerabilitiesState } from "./modules/vulnerability/types";

export interface StateDefaultType {
  count: string | number
  next: number
  previous: number
  results: Array<Object>
}

export interface ReduxState {
  vulnerabilities: VulnerabilitiesState
  hosts: HostsState
}