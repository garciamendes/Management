// Local
import { UserProps, UserTypes } from './types'

export const fetchAuth = (data: UserProps, callback?: () => void) => {
  return {
    type: UserTypes.FETCH_AUTH,
    payload: data,
    callback
  }
}