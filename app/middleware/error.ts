import { useNamecard } from '~/composables/useNamecard'

export default defineNuxtRouteMiddleware((to) => {
  const { canRegister } = useNamecard()
  if (canRegister) return

  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
})
