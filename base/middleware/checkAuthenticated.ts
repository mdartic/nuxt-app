export default defineNuxtRouteMiddleware((to, from) => {
  const { status } = useAuth()
  if (status.value !== 'authenticated')
    abortNavigation("User is not authenticated")
})
