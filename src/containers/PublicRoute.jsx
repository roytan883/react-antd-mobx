import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

const PublicRoute = inject("authStore")(observer(({ authStore, ...rest }) => {
  if (!authStore.isLogin) {
    return (<Route {...rest} />)
  } else {
    return (
      <Redirect to={{ pathname: '/' }} />
      // <Route render={props => (
      //   <Redirect to={{
      //     pathname: '/',
      //     // state: { from: props.location }
      //   }} />
      // )} />
    )
  }
}))

export default PublicRoute