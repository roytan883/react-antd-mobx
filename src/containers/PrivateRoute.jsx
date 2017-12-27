import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import stores from '../stores'

const PrivateRoute = observer(({ ...args }) => {

  console.log("PrivateRoute args = ", args)

  let isLogin = stores.authStore.isLogin
  console.log("PrivateRoute isLogin = ", isLogin)

  if (isLogin) {
    return (<Route {...args} />)
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
})

export default PrivateRoute