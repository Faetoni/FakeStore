import { defineStore } from 'pinia'
import type { UserInfoInterface } from '../interfaces/User'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      isTokenExpired: <boolean>false,
      authenticated: <boolean>false,
      token: <string>localStorage.getItem('access_token'),
      data: null as UserInfoInterface | null
    }
  },

  actions: {
    fetchToken () : string {
      const dummyToken = 'dummyToken'

      return dummyToken
    },

    fetchUserData () : UserInfoInterface {
      const dummyUser = {
        lastName: 'Иванович',
        firstName: 'Максим',
        email: 'test@email.com',
        permissions: [
          'PRODUCTS__READ'
        ]
      }

      return dummyUser
    },

    setToken (val: string) {
      this.token = val
      val ? localStorage.setItem('access_token', val) : localStorage.removeItem('access_token')
    },

    login () {
      const dummyToken = 'dummyToken'

      this.setToken(dummyToken)
    }
  }
})
