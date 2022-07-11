import Vue from "vue"
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

import auth from '@/store/modules/auth'
import http from '@/store/modules/http'
import message from '@/store/modules/message'

Vue.use(Vuex)

export default new Vue.Store({
  modules: {
    auth,
    http,
    message
  },
  plugins: [createPersistedState({
    key: 'example',
    storage: window.sessionStorage
  })]
})