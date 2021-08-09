import { StateDefaultType } from "../../types";

export enum HostsTypes {
  FETCH_LIST = 'FETCH_LIST',
  FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS',
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