import { navLinks as _navLinks, navFullLinks, NavLink } from '~/utils/constants'
import { useNamecard } from '~/composables/useNamecard'
import { useFeature } from '~/composables/useFeature'

export function useNav() {
  const navRef = ref<HTMLElement | null>(null)
  const showNav = ref(false)

  const { canPurchase } = useNamecard()
  const { showTimetable } = useFeature()

  const navLinks = computed(() => {
    if (canPurchase) return navFullLinks(showTimetable)
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
