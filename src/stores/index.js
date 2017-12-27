import { types as t } from 'mobx-state-tree'

import authStore from './authStore';

const stores = t
  .model({
    authStore: t.optional(authStore, {}),
  })

const storesObj = stores.create()

export default storesObj
