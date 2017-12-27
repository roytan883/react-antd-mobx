import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import stores from '../stores'

const PublicRoute = observer(({ ...args }) => {

  console.log("PublicRoute args = ", args)

  let isLogin = stores.authStore.isLogin
  console.log("PublicRoute isLogin = ", isLogin)

  if (!isLogin) {
    return (<Route {...args} />)
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