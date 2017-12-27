import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

const PrivateRoute = inject("authStore")(observer(({ authStore, ...rest }) => {
  if (authStore.isLogin) {
    return (<Route {...rest} />)
  } else {
    return (
      <Redirect to={{ pathname: '/login' }} />
      // <Route render={props => (
      //   <Redirect to={{
      //     pathname: '/login',
      //     // state: { from: props.location }
      //   }} />
      // )} />
    )
  }
}))

export default PrivateRoute