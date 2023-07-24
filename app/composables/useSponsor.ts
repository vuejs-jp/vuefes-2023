import { OptionCategory, SponsorCategory } from '~/types/app'

export function useSponsor() {
  const existBasic = (category: SponsorCategory | OptionCategory) =>
    category === 'platinum' || category === 'gold' || category === 'silver' || category === 'bronze'
  const getCategoryType = (category: SponsorCategory | OptionCategory) => {
    return existBasic(category) ? category : 'options'
  }

  return { existBasic, getCategoryType }
}
