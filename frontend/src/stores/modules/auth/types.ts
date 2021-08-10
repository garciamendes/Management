export enum UserTypes {
  FETCH_AUTH = 'FETCH_AUTH',
  FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS',
  FETCH_LOGOUT = 'FETCH_LOGOUT'
}

export interface UserProps {
  username: string,
  password: string
}

export interface IAuthProps {
  payload: UserProps
  type: string
  callback?: () => void
}