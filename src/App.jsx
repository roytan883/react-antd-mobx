import React, { Component } from 'react'
import { Switch, Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import createHashHistory from 'history/createHashHistory'
import createBrowserHistory from 'history/createBrowserHistory'
import createMemoryHistory from 'history/createMemoryHistory'

import stores from './stores'
import { PrivateRoute, PublicRoute } from "./containers";
import { loginPage, homePage, aboutPage } from './pages'


const routingStore = new RouterStore();

const rootStore = {
  routingStore: routingStore,
  ...stores
};

console.log("rootStore = ", rootStore)

let history = null

let isRenderer = require('is-electron-renderer')

console.log("isRenderer = ", isRenderer)





if (isRenderer) {
  const memoryHistory = createMemoryHistory();
  history = syncHistoryWithStore(memoryHistory, routingStore);
}
else {
  const browserHistory = createBrowserHistory();
  history = syncHistoryWithStore(browserHistory, routingStore);
}

// const hashHistory = createBrowserHistory();
// const history = syncHistoryWithStore(hashHistory, routingStore);


class App extends Component {

  render() {
    return (
      <Provider {...rootStore}>
        <Router history={history}>
          <Switch>
            <PublicRoute exact path='/login' component={loginPage} />
            <PrivateRoute exact path='/' component={homePage} />
            <PrivateRoute path='/about' component={aboutPage} />
            <PrivateRoute component={homePage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;