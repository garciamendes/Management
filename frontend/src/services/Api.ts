// Third party
import Axios from 'axios'

export const api = Axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const AuthTokenHeader = localStorage.getItem('token')