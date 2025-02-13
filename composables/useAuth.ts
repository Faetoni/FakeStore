import { defineAbilitiesFor } from '../plugins/ability'
import { useUserStore } from '@/stores/user'

export const useAuth = () => {
  const store = useUserStore()

  const doesTokenExist = () => {
    return localStorage.getItem('access_token')
  }

  const setUserState = async () => {
    const token = localStorage.getItem('access_token')

    if (token) {
      const user = await store.fetchUserData()

      store.$patch({
        data: user
      })

      defineAbilitiesFor(user)
    }

    store.$patch({
      token
    })

    setTimeout(() => {
      store.$patch({
        authenticated: true
      })
    }, 333)

    return store.data
  }

  const issueAccessToken = () => {
    const response = store.fetchToken()

    const accessToken = response?.data?.value.data.accessToken

    sessionStorage.removeItem('verify')

    return accessToken
  }

  const authorize = () => {
    return false
  }

  const logout = () => {
    localStorage.removeItem('access_token')

    store.$patch({
      authenticated: null,
      data: null,
      token: null
    })

    navigateTo('/Login', {
      external: true,
      replace: true
    })
  }

  return { doesTokenExist, setUserState, logout, issueAccessToken, authorize }
}
