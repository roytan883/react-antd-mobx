import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import stores from '../stores'

const PublicRoute = observer(({ ...rest }) => {
  if (!stores.authStore.isLogin) {
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
})

export default PublicRoute