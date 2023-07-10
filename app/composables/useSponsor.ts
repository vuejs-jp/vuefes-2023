import { OptionCategory, SponsorCategory } from '~/types/app'

export function useSponsor() {
  const existBasic = (category: SponsorCategory | OptionCategory) =>
    category === 'platinum' || category === 'gold' || category === 'silver' || category === 'bronze'

  return { existBasic }
}
