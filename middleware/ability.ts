const canNavigate = to => {
  const { can } = useCasl()

  return to.matched.some(route => can(route.meta.action, route.meta.subject))
}

export default defineNuxtRouteMiddleware(to => {
  if (!canNavigate(to)) {
    return navigateTo('/not-authorized')
  }
})
