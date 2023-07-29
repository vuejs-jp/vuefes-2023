import { navLinks as _navLinks, navRegisterLinks, NavLink } from '~/utils/constants'
import { useNamecard } from '~/composables/useNamecard'

export function useNav() {
  const navRef = ref<HTMLElement | null>(null)
  const showNav = ref(false)

  const { canPurchase } = useNamecard()

  const navLinks = computed(() => {
    if (canPurchase) return navRegisterLinks
    return _navLinks
  })

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

  return { navRef, showNav, navLinks }
}
