import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user'

export default createStore({
  modules: {
    user
  },
  plugins: [
    createPersistedstate({
      key: 'cyber-client-store',
      paths: ['user']
    })
  ]
})
