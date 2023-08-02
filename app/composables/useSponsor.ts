import { OptionCategory, SponsorCategory } from '~/types/app'

export function useSponsor() {
  const isPlatinum = (categories: Array<SponsorCategory | OptionCategory>) =>
    categories.some((category) => category === 'platinum')

  const isOptions = (categories: Array<SponsorCategory | OptionCategory>) =>
    categories.every(
      (category) =>
        category !== 'platinum' &&
        category !== 'gold' &&
        category !== 'silver' &&
        category !== 'bronze',
    )

  const isBasicBy = (category: SponsorCategory | OptionCategory) =>
    category === 'platinum' || category === 'gold' || category === 'silver' || category === 'bronze'

  const getCategoryType = (category: SponsorCategory | OptionCategory): string => {
    return isBasicBy(category) ? category : 'options'
  }

  return { isPlatinum, isOptions, isBasicBy, getCategoryType }
}
