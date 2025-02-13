// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtRouteMiddleware(async to => {
  const { doesTokenExist, setUserState, authorize } = useAuth()

  if (doesTokenExist()) {
    await setUserState()

    return
  }

  const isAuthorized = await authorize()

  if (isAuthorized) {
    return navigateTo('/products')
  }
  else {
    return navigateTo('/login')
  }
})
