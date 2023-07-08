import { navLinks, NavLink } from '~/utils/constants'
import useAuth from '~/composables/useAuth'

export function useNav() {
  const navRef = ref<HTMLElement | null>(null)
  const showNav = ref(false)

  function checkShowNav() {
    showNav.value = window.pageYOffset > 50
  }

  onMounted(function () {
    checkShowNav()
    window.addEventListener('scroll', checkShowNav)
  })

  onUnmounted(function () {
    window.removeEventListener('scroll', checkShowNav)
  })

  return { navRef, showNav }
}

export async function getNavLinks(): Promise<ComputedRef<NavLink[]>> {
  const { hasAuth, signedUser } = await useAuth()
  const myNavLinks = computed(() => {
    const links = [...navLinks]
    if (hasAuth.value) {
      links.unshift({
        text: 'MyPage',
        link: `users/${signedUser.user_id}`,
      })
    }
    return links
  })
  return myNavLinks
}
