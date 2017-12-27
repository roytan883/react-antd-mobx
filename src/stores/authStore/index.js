import { types as t } from 'mobx-state-tree'

const authStore = t
  .model('authStore', {
    authenticated: false,
  })
  .views(self => ({
    get isLogin() {
      return self.authenticated
    },
  }))
  .actions(self => ({
    login(user, password) {
      self.authenticated = true
    },
    logout() {
      self.authenticated = false
    },
  }))

export default authStore
