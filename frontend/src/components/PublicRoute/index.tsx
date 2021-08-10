// React
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// Local
import { isLogin } from '../../utils'

const PublicRoute = ({ component: Component, restricted, ...rest }: any) => {
  return (
    <Route {...rest} render={props => (
      isLogin() && restricted ?
        <Redirect to='/dashboard' />
        : <Component {...props} />
    )} />
  )
}

export default PublicRoute