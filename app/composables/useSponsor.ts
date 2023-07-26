import { OptionCategory, SponsorCategory } from '~/types/app'

export function useSponsor() {
  const isPlatinum = (categories: Array<SponsorCategory | OptionCategory>) =>
    categories.some((category) => category === 'platinum')

  const isBasic = (category: SponsorCategory | OptionCategory) =>
    category === 'platinum' || category === 'gold' || category === 'silver' || category === 'bronze'

  const getCategoryType = (category: SponsorCategory | OptionCategory): string => {
    return isBasic(category) ? category : 'options'
  }

  return { isPlatinum, isBasic, getCategoryType }
}
