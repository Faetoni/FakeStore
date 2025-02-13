import { useAppStore } from '../stores/app'

export default defineNuxtRouteMiddleware(to => {
  const appStore = useAppStore()

  const breadcrumbItems = to.meta?.breadcrumb

  appStore.$patch({
    breadcrumb: breadcrumbItems || []
  })
})
