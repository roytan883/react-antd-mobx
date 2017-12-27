import React, { Component } from 'react'
import { Switch, Router } from 'react-router-dom'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import createHashHistory from 'history/createHashHistory'
import createBrowserHistory from 'history/createBrowserHistory'
import stores from './stores'
import { loginPage, homePage } from './pages'
import { PrivateRoute, PublicRoute } from "./containers";
// import Login from './containers/Login'
// import Dashboard from './containers/Dashboard';
// import PrivateRoute from './containers/PrivateRoute'
// import PublicRoute from './containers/PublicRoute';


const hashHistory = createBrowserHistory();
// const hashHistory = createHashHistory();
const routingStore = new RouterStore();

const rootStore = {
  routingStore: routingStore,
  ...stores
};

console.log("rootStore = ", rootStore)

const history = syncHistoryWithStore(hashHistory, routingStore);


class App extends Component {

  render() {
    return (
      <Provider {...rootStore}>
        <Router history={history}>
          <Switch>
            <PublicRoute exact path='/login' component={loginPage} />
            <PrivateRoute path='/' component={homePage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;