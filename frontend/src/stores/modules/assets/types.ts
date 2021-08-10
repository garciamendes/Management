import { StateDefaultType } from "../../types";

export enum HostsTypes {
  FETCH_HOSTS_LIST = 'FETCH_HOSTS_LIST',
  FETCH_HOST_LIST_SUCCESS = 'FETCH_HOST_LIST_SUCCESS',
}

export interface HostsProps {
  id: number
  hostname: string
  risk: number
  vuln_count: number
}

export interface HostsProps {
  payload: HostsProps
}

export interface HostsState extends StateDefaultType {
  results: Array<HostsProps>
}
